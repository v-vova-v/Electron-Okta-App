function OktaClient(clientId, issuer, redirectUri) {
  this.oktaClient = new OktaAuth.OktaAuth({
    clientId,
    issuer,
    redirectUri,
  });

  this.isAuth = async function isAuth() {
    return !!(await this.oktaClient.tokenManager.get("accessToken"));
  };
}

module.exports = {
  OktaClient,
};
