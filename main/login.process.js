const electron = require("electron");
const BrowserWindow = electron.BrowserWindow;

const { RESTServer } = require("../server");

async function createloginWindow(storedData) {
  const win = new BrowserWindow({
    width: 1500,
    height: 1200,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      webSecurity: false,
    },
  });

  const server = new RESTServer();
  win.loadURL("http://localhost:5000/templates/login.html");
  const { url, port } = await server.lisen(5000);

  const {
    session: { webRequest },
  } = win.webContents;
  const filter = {
    urls: ["http://localhost:5000/callback*"],
  };
  const logOutUrl = {
    urls: ["http://localhost/logout"],
  };

  win.webContents.on("destroyed", async () => {
    await server.close();
  });

  win.webContents.once("did-finish-load", () => {
    win.webContents.send("finishLoad", port, storedData);
  });

  webRequest.onBeforeRequest(logOutUrl, ({ url }) => {
    win.loadURL("http://localhost:5000/templates/login.html");
  });

  webRequest.onBeforeRequest(filter, ({ url }) => {
    win.loadURL("http://localhost:5000/templates/login.html");
    win.webContents.on("did-finish-load", () => {
      win.webContents.send("finishLoad");
      win.webContents.send("store-data", url);
    });
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
