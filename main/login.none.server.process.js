const { BrowserWindow, ipcMain } = require("electron");

function createloginWindow() {
  const redirectURI = "http://localhost:5000/callback";
  const loginViewPath = "./templates/login.html";
  const logOutUrl = {
    urls: ["http://localhost/logout*"],
  };
  const filter = {
    urls: [`${redirectURI}*`],
  };
  const win = new BrowserWindow({
    width: 1500,
    height: 1200,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      webSecurity: false,
    },
  });

  win.loadFile(loginViewPath);

  const {
    session: { webRequest },
  } = win.webContents;

  webRequest.onBeforeRequest(filter, ({ url }) => {
    win.loadFile(loginViewPath);
    win.webContents.once("did-finish-load", () => {
      win.webContents.send("store-data", url);
    });
  });

  win.webContents.on("did-finish-load", () => {
    win.webContents.send("finishLoad");
  });

  ipcMain.once("logout", () => {
    const { createSettingsWindow } = require("./settings.process");
    createSettingsWindow();
    win.destroy();
  });
}

module.exports = {
  createloginWindow,
};
