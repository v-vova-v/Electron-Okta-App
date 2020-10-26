const restify = require('restify');
const fs = require('fs');
const path = require('path');

function registerRouts(server) {


	server.get('/callback', (req, res) => {
    const body = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">' +
      '<title>Electron App</title></head>' +
      '<body><!--This page is used as the redirect-->' +
      '</body></html>';
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'text/html'
    });
    res.write(body);
    res.end();
	});
	
	// server.get('/login', function(req, res, next) {
	// 	fs.readFile(`./templates/login.html`, 'utf8', function(err, file) {
	// 		if (err) {
	// 			res.send(500);
	// 			return next();
	// 		}
	
	// 		res.write(file);
	// 		res.end();
	// 		return next();
	// 	});
	// });

	server.get('/**/*', restify.plugins.serveStaticFiles(''));

	// server.get('/login/login.html', restify.plugins.serveStatic({
	// 	directory: './template',
	// 	file: 'login.html'
	// }));

}

module.exports = {
	registerRouts
}