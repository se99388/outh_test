/**
 * Define the AuthorizationCode. includes:
 * redirect_uri: callback url to the user to get the code
 * 
 */

const {config} = require('./config');

 const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');

    const client = new AuthorizationCode(config);
   //send it as s get request. the first stage in the grant flow. the response will be the grant (authorization) code 
    const authorizationUri = client.authorizeURL({
      redirect_uri: 'https://localhost:3000/callback',
      // redirect_uri: 'https://tstdrv647978.app.netsuite.com/app/site/hosting/scriptlet.nl?script=522&deploy=1',
      scope: 'restlets rest_webservices',
      state: 'ykv2XLx1BpT5Q0F3MRPHb94j'
    });
   
  module.exports = {
    authorizationUri,
    client
  }