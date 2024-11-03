const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('preload', {
  getAppVersion: () => {
    return process.versions.electron;
  },
  
  onMessage: (callback) => {
    ipcRenderer.on('message', (event, message) => {
      callback(message);
    });
  }
});

