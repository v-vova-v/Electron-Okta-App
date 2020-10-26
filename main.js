const { app, ipcMain } = require('electron');
const { createloginWindow } = require('./main/login.process');


async function startApp() {
	  createloginWindow()
} 

app.on('ready', startApp);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})