const { ipcRenderer } = require('electron')

window.electronAPI = {
  getAppVersion: () => ipcRenderer.invoke('getAppVersion'),
  getMenu: () => ipcRenderer.invoke('getMenu'),
  createWindow: (name, options) => ipcRenderer.invoke('createWindow', name, options),
  buildMenu: () => ipcRenderer.invoke('buildMenu'),
  popupMenu: () => ipcRenderer.invoke('popupMenu'),
  sendEventToOtherWindows: (eventName, ...args) => ipcRenderer.invoke('sendEventToOtherWindows', eventName, ...args),
    resizeWindow: (width, height) => {
      ipcRenderer.invoke('resizeWindow', width, height)
    },
}
