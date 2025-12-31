import { contextBridge, ipcRenderer } from 'electron';

// Define the API interface exposed to renderer process
interface PreloadAPI {
  getAppVersion: () => string;
  onMessage: (callback: (message: string) => void) => void;
}

// Expose protected methods to renderer process
contextBridge.exposeInMainWorld('preload', {
  getAppVersion: (): string => {
    return process.versions.electron;
  },

  onMessage: (callback: (message: string) => void): void => {
    ipcRenderer.on('message', (_event, message: string) => {
      callback(message);
    });
  }
} as PreloadAPI);

// Extend the Window interface to include our preload API
declare global {
  interface Window {
    preload: PreloadAPI;
  }
}
