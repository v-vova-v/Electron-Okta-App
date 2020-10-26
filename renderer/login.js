const ipcRenderer = require('electron').ipcRenderer;

const { OktaClient } = require("./services/okta.auth");
const loginBtn = document.querySelector("button#login");

let okta;

function showSigninWidget() {
	// Create an instance of the signin widget
	var signIn = new OktaSignIn({
		baseUrl: 'https://dev-555244.okta.com',
		clientId: '0oa14tuzd9IhCdlFz4x7',
		redirectUri: 'http://localhost:8080/implicit/callback',
		authParams: {
			issuer: 'https://dev-555244.okta.com/oauth2/default',
			state: 'dsdsdfs',
		}
	});

	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
		signIn.renderEl({
				el: '#signin-widget'
			},
			function success(res) {
				console.log('login success', res);
				if (res.status === 'SUCCESS') {
					// Hide login UI
				}
			},
			function error(err) {
				console.log('login error', err);
			}
		);
  } 
}

ipcRenderer.on('port', async (e, port) => {
	okta = new OktaClient (
		'your_client_id', 
		'issuer', 
		`http://localhost:${port}/callback`
	)
	console.log({port})
	loginBtn.addEventListener('click', async (e) => {
		sessionStorage.setItem('okta-app-url', `${window.location.origin}/arr`);
		const a = await okta.isAuth();
		console.log({a});
		if (await okta.isAuth()) {
			okta.oktaClient.token.getWithoutPrompt({responseType: ['id_token', '']}).then(
				(data) => {
					console.log({data});
				}
			).catch((err) => {
				debugger
			})
		} else {
			okta.oktaClient.token.getWithRedirect({
					scopes: ['openid', 'email', 'profile']
			});
		}
	});

});

ipcRenderer.on('store-data', async (e, url) => {
		const data = await okta.oktaClient.token.parseFromUrl(url);
		okta.oktaClient.tokenManager.add('idToken', data.tokens.accessToken);
		okta.oktaClient.tokenManager.add('accessToken', data.tokens.accessToken);
	
});
