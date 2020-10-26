const { BrowserWindow } = require('electron');

const { RESTServer } = require('../server');

async function createloginWindow() {
	const win = new BrowserWindow({
		width: 1500,
		height: 1200,
		webPreferences: {
      nodeIntegration: true,
			enableRemoteModule: true,
			webSecurity: false
    }
	});

	const server = new RESTServer();
	win.loadURL('http://localhost:5000/templates/login.html');
	const {url, port} = await server.lisen(5000);

	const {session: {webRequest}} = win.webContents;
	const filter = {
		urls: [
			 'http://localhost:5000/callback*'
		]
	};

	win.webContents.on('destroyed',  async () => {
		console.log('1')
		await server.close();
	});

	win.webContents.on('did-finish-load', () => {
		win.webContents.send('port', port)
	})

	webRequest.onBeforeRequest(filter, ({url}) => {
		console.log({a: 1})
	  win.loadURL('http://localhost:5000/templates/login.html');
		win.webContents.on('did-finish-load', () => {
			win.webContents.send('store-data', url)
		})
	});
}

module.exports = {
	createloginWindow
}