export default function Renderer() {
  console.log('Production Renderer Loaded');

  // 调用 preload 脚本暴露的 API
  console.log('=== 演示调用 preload API ===');

  // 1. 调用 getAppVersion() 方法获取 Electron 版本号
  const electronVersion = window.preload.getAppVersion();
  console.log('Electron 版本号:', electronVersion);

  // 2. 使用 onMessage() 方法监听主进程发送的消息
  window.preload.onMessage((message) => {
    console.log('[renderer] 收到主进程消息:', message);
  });
  window.preload.fromMainToRenderer((payload) => {
    console.log('[renderer] from-main.to-renderer:', payload);
  });
  console.log('已注册消息监听器');
}
