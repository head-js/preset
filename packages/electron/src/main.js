const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const log = require('electron-log');
const { ServerInstance } = require('./mockoon/server-management');

// Configure electron-log
log.transports.file.level = 'info';
log.transports.console.level = 'debug';

let mainWindow;
const getMainWindow = () => mainWindow;

log.info('Main process started', {
  nodeEnv: process.env.NODE_ENV,
  electronVersion: process.versions.electron
});

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: process.env.MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      nodeIntegration: false,
      contextIsolation: true
    },
  });

  // Load the index.html of the app.
  // development: use external renderer (MAIN_WINDOW_DIST_ENTRY)
  // production: use forge's built renderer (MAIN_WINDOW_WEBPACK_ENTRY)
  log.info('MAIN_WINDOW_DIST_ENTRY:', process.env.MAIN_WINDOW_DIST_ENTRY);
  log.info('MAIN_WINDOW_WEBPACK_ENTRY:', process.env.MAIN_WINDOW_WEBPACK_ENTRY);

  if (process.env.NODE_ENV === 'development') {
    log.debug('Loading renderer from external dev server:', process.env.MAIN_WINDOW_DIST_ENTRY);
    mainWindow.loadURL(process.env.MAIN_WINDOW_DIST_ENTRY);
  } else {
    log.debug('Loading renderer from webpack build:', process.env.MAIN_WINDOW_WEBPACK_ENTRY);
    mainWindow.loadURL(process.env.MAIN_WINDOW_WEBPACK_ENTRY);
  }

  // 主动向渲染进程发送消息
  setTimeout(() => {
    mainWindow.webContents.send('message', 'Hello from main process!');
  }, 2000);

  // Open the DevTools in development mode
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
};

// IPC handlers for preload script
ipcMain.handle('ping', () => {
  log.debug('Received ping from renderer');
  return 'pong';
});

ipcMain.handle('get-app-info', () => {
  log.debug('Received get-app-info request from renderer');
  return {
    appName: 'PresetElectron',
    version: '1.0.0',
    platform: process.platform
  };
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
  log.info('App is ready, creating window');
  // Koa server is already started by requiring it above
  createWindow();

  new ServerInstance({ uuid: 'uuid', port: 9090, hostname: '127.0.0.1' }, { getMainWindow });

  app.on('activate', () => {
    log.debug('App activated');
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', () => {
  log.info('All windows closed');
  if (process.platform !== 'darwin') {
    log.info('Quitting app');
    app.quit();
  }
});
