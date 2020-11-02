const { app, ipcMain } = require("electron");

//const { createloginWindow } = require("./main/login.process");
const { createSettingsWindow } = require("./main/settings.process");
//const createNoneServerLoginWindow = require("./main/login.none.server.process").createloginWindow;

async function startApp() {
  createSettingsWindow();
  //createloginWindow();
  // createNoneServerLoginWindow();
}

app.on("ready", startApp);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
