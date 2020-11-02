const ipcRenderer = require("electron").ipcRenderer;

ipcRenderer.on("finishLoad", async (e, port, data) => {
	console.log('start');
	const isActiveServer = data && data.isActiveService ? data.isActiveService : JSON.parse(localStorage.getItem("serverIsActive"))
	const { OktaClient } = require(`${isActiveServer ? '.' : '..'}/services/okta.auth`);
	const loginBtn = document.querySelector("button#login");
	const logoutBtn = document.getElementById("logout");
	const { clientId, issuer, redirectUri } = JSON.parse(
    data && data.oktaParams ? data.oktaParams : localStorage.getItem("oktaParams")
	);
  const okta = new OktaClient(
    clientId,
    issuer,
    redirectUri || `http://localhost:${port || "5000"}/callback`
	);
	localStorage.setItem("oktaParams", JSON.stringify({clientId, issuer, redirectUri}));
	localStorage.setItem("serverIsActive", isActiveServer);

	
  logoutBtn.addEventListener("click", async (e) => {
    await okta.oktaClient.signOut();
    ipcRenderer.send("logout");
	});
	
	loginBtn.addEventListener("click", async (e) => {
    if (await okta.isAuth()) {
      okta.oktaClient.token
        .getWithoutPrompt({ responseType: ["id_token", ""] })
        .then((data) => {
          console.log({ data });
        })
        .catch((err) => {
          debugger;
        });
    } else {
      okta.oktaClient.token.getWithRedirect({
        scopes: ["openid", "email", "profile"],
      });
    }
	});
	
	ipcRenderer.on("store-data", async (e, url) => {
    const data = await okta.oktaClient.token.parseFromUrl(url);
    okta.oktaClient.tokenManager.add("idToken", data.tokens.accessToken);
    okta.oktaClient.tokenManager.add("accessToken", data.tokens.accessToken);
  });
});
