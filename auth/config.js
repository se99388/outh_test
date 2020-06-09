
/**
 * auth configuration - includes:
 * client_id, 
 * client_secret, 
 * access_token_url (to get the token by post request), 
 * authorize_url (to get the authorization code grant)
 */


const config = {
    client: {
      id: '777ba337c0f9647b49dfc535e67a06062fca77bda0a569914e03655b527fd714',
      secret: '4db9e83d9e9a5a6d0efdecd257f357baf7125b5fe70773cddf95380244a0de0e'
    },
    auth: {
    tokenHost:'https://TSTDRV647978.suitetalk.api.netsuite.com',
    tokenPath: '/services/rest/auth/oauth2/v1/token',
    authorizeHost: 'https://TSTDRV647978.app.netsuite.com' ,
    authorizePath: '/app/login/oauth2/authorize.nl',
    }
  };

  module.exports = {
      config
  }