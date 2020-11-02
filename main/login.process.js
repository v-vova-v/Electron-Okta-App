const { BrowserWindow, ipcMain } = require("electron");

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
  const { url, port } = await server.lisen(5000);
  const {
    session: { webRequest },
  } = win.webContents;
  const filter = {
    urls: ["http://localhost:5000/callback*"],
  };

  win.loadURL("http://localhost:5000/templates/login.html");

  win.webContents.on("did-finish-load", () => {
    win.webContents.send("finishLoad", port, storedData);
  });

  webRequest.onBeforeRequest(filter, ({ url }) => {
    win.loadURL("http://localhost:5000/templates/login.html");
    win.webContents.once("did-finish-load", () => {
      win.webContents.send("finishLoad", null, null, url);
    });
  });

  ipcMain.once("logout", async () => {
    const { createSettingsWindow } = require("./settings.process");
    createSettingsWindow();
    await server.close();
    win.destroy();
  });
}

module.exports = {
  createloginWindow,
};
