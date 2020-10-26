const restify = require('restify');
const { registerRouts } = require('./routs');
const CORS = require('restify-cors-middleware');

function RESTServer() {
	const cors = CORS(
		{
			preflightMaxAge: 5,
			origins: ['*'],
			allowHeaders:[],
			exposeHeaders:[]
		}
	);

	this._router = restify.createServer({
		name: 'electronServer',
		handleUncaughtExceptions: true
	});

	this._router.pre(cors.preflight);
	this._router.use(cors.actual);
	
	this.lisen = function(port) {
		return new Promise((resolve, reject) => {
			this._router.once('error', err => reject(err));
      this._router.listen(port, () => {
				registerRouts(this._router);
        resolve({ url: this._router.url, port: this._router.address().port });
      });
    });
	}

	this.close = function() {
		return new Promise(resolve => {
			if (this._router) {
				this._router.close(() => resolve());
			} else {
				resolve();
			}
		});
	}
}

module.exports = {
	RESTServer
}