const { BrowserWindow, ipcMain } = require("electron");
const createNoneServerLoginWindow = require("./login.none.server.process")
  .createloginWindow;
const { createloginWindow } = require("./login.process");


function createSettingsWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 1200,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      webSecurity: false,
    },
  });

  win.loadFile("./templates/settings.html");

  ipcMain.once("runLoginWin", async (e, isActiveServer, storedData) => {
    isActiveServer ? createloginWindow(storedData) : createNoneServerLoginWindow();
    win.destroy();
  });
  
}

module.exports = {
  createSettingsWindow,
};
