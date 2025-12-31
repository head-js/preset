# Preset Electron 应用需求文档

## 1. 项目概述

这是一个基于 Electron 框架开发的桌面应用，主要功能是在主进程中运行一个服务器，并提供基本的 API 端点。

**核心特性**：
- 主进程运行 Koa 服务器（监听 9090 端口）
- 支持开发和生产两种环境模式
- 生产环境支持加载外部项目的渲染进程构建产物
- 统一的主进程和预加载脚本管理（开发/生产共用）

## 2. 核心架构

### 2.1 Webpack 构建模式

本项目采用**Webpack 构建模式**，遵循 `@electron-forge/plugin-webpack` 规范，使用单一 Webpack 主进程配置处理主进程、渲染进程和预加载脚本的构建。

**构建产物输出结构**：
- 主进程：`.webpack/main/index.js`
- 渲染进程：`.webpack/renderer/main_window/index.html` 和 `index.js`
- 预加载脚本：`.webpack/renderer/main_window/preload.js`

**预加载脚本**：
- 入口文件：`src/preload.js`
- 通过 `contextBridge` 安全地暴露 API 给渲染进程
- 提供 `getAppVersion()` 方法获取 Electron 版本号
- 提供 `onMessage()` 方法监听主进程消息

**Webpack 全局变量注入**：
- `MAIN_WINDOW_WEBPACK_ENTRY`：渲染进程 HTML 构建产物路径
- `MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY`：预加载脚本构建产物路径

**核心原则**：
- 使用 `@electron-forge/plugin-webpack` 的标准配置
- 在 `forge.config.js` 中配置 renderer entryPoints
- 使用单一 Webpack 主进程配置（不区分主/渲染进程配置）
- entryPoints 的 `name` 字段决定输出目录结构（`main_window` 目录）

### 2.2 主进程 (Main Process)

- **窗口管理**：
  - 使用 `MAIN_WINDOW_WEBPACK_ENTRY` 全局变量加载渲染进程
  - 使用 `MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY` 全局变量加载预加载脚本
  - 窗口大小：1000x700 像素
  - 开发模式下自动打开 DevTools

- **服务器管理**：
  - 启动 Koa 服务器，监听 9090 端口
  - 支持服务器状态检查
  - 支持服务器启动和停止
  - 服务器通过子进程运行

- **IPC 通信**：
  - `ping` handler：提供渲染进程与主进程的基本通信测试
  - `get-app-info` handler：返回应用信息（名称、版本、平台）
  - 主进程主动向渲染进程发送消息（通过 `webContents.send()`）
  - 支持双向通信机制

### 2.3 服务器功能

- **API 端点**：
  - `GET /api/ping`：返回基本的心跳响应
  - `GET /api/server-uuid`：获取服务器 UUID（演示访问 server 内部属性）
  - `GET /api/emits/from-main/to-renderer`：触发从主进程到渲染进程的事件
  - 响应格式：JSON，包含 code、message 和 data 字段
  - CORS 支持：允许所有来源访问

- **事件驱动通信**：
  - HTTP 路由通过 `server.emit()` 触发事件
  - `ServerInstance` 监听服务器事件并转发到渲染进程
  - 支持的事件：
    - `from-main.to-renderer`：从主进程转发消息到渲染进程
    - `started`：服务器启动事件

- **错误处理**：
  - 统一的错误响应格式
  - 处理未捕获异常和未处理的 Promise 拒绝

### 2.4 主进程与服务器通信机制

**事件驱动架构**：

主进程和 Mock API Server 之间通过事件机制通信，解耦服务器逻辑和主进程逻辑。

**MainProcessBridge 接口**：
- `getMainWindow(): BrowserWindow`：获取主窗口实例的回调函数
- 通过构造函数注入到 `ServerInstance`，支持动态获取窗口实例
- 在 `main.js` 中定义为闭包函数，确保每次调用都能获取最新的 mainWindow

**通信流程**：
1. HTTP 请求 → Koa 路由处理
2. 路由通过 `options.server.emit('event-name', payload)` 触发事件
3. `ServerInstance` 监听 MockoonServer 的事件
4. `ServerInstance` 通过 `mainWindow.webContents.send()` 转发到渲染进程
5. 渲染进程通过 preload 暴露的 `onMessage()` 接收消息

**示例流程**：
```
HTTP GET /api/emits/from-main/to-renderer
  ↓
routes.ts: server.emit('from-main.to-renderer', { k1: 'v1' })
  ↓
server-management.ts: server.on('from-main.to-renderer', (payload) => {...})
  ↓
mainWindow.webContents.send('from-main.to-renderer', payload)
  ↓
渲染进程接收消息
```

### 2.5 构建配置

#### Electron Forge + Webpack 配置

`@electron-forge/plugin-webpack` 插件要求 `entryPoints` 必须使用数组格式，即使只有一个窗口配置。

**开发环境配置**：
- 窗口标识符：`main_window`（决定输出目录名称）
- 渲染进程 HTML：`src/renderer.html`
- 渲染进程 JS：`src/renderer.js`
- 预加载脚本：`src/preload.ts`（TypeScript）

**生产环境配置**：
- 渲染进程 HTML：使用外部构建产物 `src/dist-renderer/index.html`
- 渲染进程 JS：使用外部构建产物 `src/dist-renderer/index.js`
- 预加载脚本：始终使用 `src/preload.ts`（通过 webpack 构建）
- 主进程：始终使用 `src/main.js`（通过 webpack 构建）

**生产环境外部构建产物策略**：

生产环境使用外部项目的构建产物，采用以下机制避免 Webpack 二次编译：

1. **假 entry 配置**：`forge.config.js` 中配置 `src/dist-renderer/index.html` 和 `src/dist-renderer/index.js` 作为渲染进程 entry
2. **Webpack 处理**：Webpack 会尝试处理这些文件（因为 HTML 中引用了 JS）
3. **覆盖机制**：使用自定义 Electron Forge 插件 `OverwriteRendererPlugin` 在打包前，用原始的外部构建产物**强制覆盖** Webpack 的输出
4. **最终结果**：输出目录中的文件是未经 Webpack 修改的原始外部构建产物

**关键特性**：
- 通过自定义 Forge 插件的 `prePackage` hook 确保外部构建产物不被 Webpack 修改
- `MAIN_WINDOW_WEBPACK_ENTRY` 在开发和生产环境都指向正确的渲染进程文件
- `main.js` 代码在两种环境下完全一致，无需额外的环境判断
- 插件在打包前自动将 `src/dist-renderer/` 的文件复制到 `.webpack/x64/renderer/main_window/` 目录

### 2.6 开发与生产模式

- **开发模式**：
  - 使用 `cross-env NODE_ENV=development npm start` 启动
  - 主进程支持热更新（通过 HMR）
  - 自动打开 DevTools

- **生产模式**：
  - 执行 `npm run make` 打包
  - Webpack 使用 production 模式优化
  - 打包后的应用包含所有依赖

## 3. 技术栈

### 3.1 核心框架
- **Electron 24.8.8**：桌面应用框架
- **Node.js**：运行时环境
- **Webpack 5.88.2**：模块打包工具
- **Electron Forge 7.3.1**：Electron 应用脚手架和打包工具
- **TypeScript 5.7.3**：类型系统（支持 JS/TS 混合开发）
  - 配置支持 JS/TS 混合开发
  - `tsconfig.json` 排除目录：`src/mockoon`、`plugins`
  - `noImplicitAny: false`：允许隐式 any 类型（处理无类型定义的老库如 killable）
  - Webpack 使用 `babel-loader` + `ts-loader` 链式处理 TypeScript
  - `ts-loader` 启用类型检查（非 transpileOnly 模式）
- **Babel**：代码转译（目标：Electron 24）

### 3.2 Mock API Server
- **Koa 2.16.3**：HTTP 服务器框架
- **koa-router 11.0.2**：路由管理
- **killable 1.0.1**：服务器优雅关闭支持
- **typed-emitter 2.1.0**：类型化事件发射器

Mock API Server 基于 Mockoon 项目简化改造，使用 Koa 替代原有的 Express 框架。Koa 的 async/await 中间件模型更适合现代 Node.js 应用开发。

### 3.3 开发工具
- **ts-loader 9.4.4**：TypeScript 编译器
- **babel-loader 8.2.4**：Babel 加载器
- **cross-env**：跨平台环境变量设置
- **electron-log 5.2.4**：日志管理

### 3.4 包管理
- **npm**：项目包管理工具
- 注意：`package.json` 中的 `packageManager` 字段是 electron-forge 自动生成的，应忽略且不应提交到版本控制

## 4. 开发流程

1. **环境准备**：
   - 安装 Node.js 依赖：`npm install`
   - 全局安装 cross-env（Windows 系统）：`npm install -g cross-env`
2. **开发模式**：`npm run start`
3. **打包应用**：`npm run make`

**注意**：本项目使用 npm 作为包管理工具，不要使用 yarn 或其他包管理器。

## 5. 项目结构

```
├── src/
│   ├── main.js              # 主进程入口文件（开发和生产共用）
│   ├── preload.ts           # 预加载脚本（TypeScript，开发和生产共用）
│   ├── renderer.js          # 渲染进程入口（开发环境）
│   ├── renderer.html        # 渲染进程页面（开发环境）
│   ├── mockoon/             # Mock API Server 模块
│   │   ├── server-management.ts  # 服务器实例管理
│   │   ├── models/
│   │   │   ├── environment.model.ts
│   │   │   └── events.model.ts
│   │   └── server/
│   │       ├── server.ts    # MockoonServer 实现（Koa + EventEmitter）
│   │       └── routes.ts    # 路由定义
│   └── dist-renderer/       # 生产环境渲染进程目录
│       ├── index.html       # 外部构建产物（渲染进程页面）
│       └── index.js         # 外部构建产物（渲染进程代码）
├── plugins/                 # 自定义 Electron Forge 插件
│   └── forge-plugin-overwrite-renderer.js  # 覆盖渲染进程构建产物插件
├── .webpack/                # Webpack 构建产物
│   ├── main/
│   │   └── index.js
│   └── renderer/
│       └── main_window/
│           ├── index.html
│           ├── index.js
│           └── preload.js
├── .specs/
│   └── requirements.md      # 需求文档
├── webpack.main.config.js   # Webpack 主进程配置
├── webpack.renderer.config.js  # Webpack 渲染进程配置
├── tsconfig.json            # TypeScript 配置
├── babel.config.js          # Babel 配置
├── forge.config.js          # Electron Forge 配置
└── package.json             # 项目依赖和脚本
```

## 6. 发布流程

1. 执行 `npm run make` 打包
2. 构建产物位于 `out/PresetElectron-win32-x64/` 目录
3. 打包文件位于 `out/make/zip/win32/x64/PresetElectron-win32-x64-24.0.0.zip`

## 7. 状态管理

- 服务器状态通过事件机制管理
- `ServerInstance` 类管理服务器实例生命周期
- 支持服务器启动事件（`started`）通知渲染进程
- 通过 MainProcessBridge 动态获取主窗口实例

## 8. 安全考虑

- 启用 contextIsolation 隔离上下文
- 禁用 nodeIntegration 防止渲染进程访问 Node.js
- 预加载脚本通过 `contextBridge` 安全地暴露 API：
  - `getAppVersion()`：获取 Electron 版本号
  - `onMessage(callback)`：监听主进程消息
    - 接收来自 `webContents.send()` 的消息
    - 支持从 HTTP API 触发的事件消息（如 `from-main.to-renderer`）
- IPC 通信通过 `ipcMain.handle()` 和 `ipcRenderer.invoke()` 模式实现
- 已实现的 IPC handlers：
  - `ping`：基本的通信测试接口
  - `get-app-info`：获取应用基本信息（名称、版本、平台）
- 主进程主动消息推送通过 `webContents.send(channel, ...args)` 实现
  - 支持多参数传递
  - 可由 HTTP 路由触发 server 事件间接调用

## 9. 性能要求

- 服务器启动时间应控制在合理范围内
- 主进程内存占用应优化
- 支持多窗口模式（未来扩展）

## 10. 依赖管理注意事项

- `packageManager` 字段会被 electron-forge 自动添加，但不应提交到版本控制
- 使用 npm 作为包管理工具，避免使用 yarn 或其他工具

## 11. 未来扩展

### 11.1 服务器功能扩展
- 支持多服务器实例管理
- 支持服务器配置动态更新
- 提供更丰富的 RESTful API 端点
- 支持与外部系统集成（数据库、缓存等）

### 11.2 IPC 通信扩展
- 扩展更多业务相关的 IPC handlers
- 实现渲染进程与服务器的桥接通信
- 添加 IPC 消息队列和错误处理机制

### 11.3 窗口管理扩展
- 支持多窗口模式
- 窗口状态持久化
- 窗口间通信机制

### 11.4 构建与部署优化
- 优化外部构建产物的加载机制
- 支持增量更新
- 添加自动更新功能
- 支持多平台打包优化

