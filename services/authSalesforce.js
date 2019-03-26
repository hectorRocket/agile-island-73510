var jsforce = require("jsforce");

const keys = require("../config/keys");

class AuthSalesforce {
  constructor() {
    /*
    var conn = new jsforce.Connection({
      oauth2: {
        // you can change loginUrl to connect to sandbox or prerelease env.
        // loginUrl : 'https://test.salesforce.com',
        clientId: keys.SFDC_CLIENT_ID,
        clientSecret: keys.SFDC_CLIENT_SECRET_ID,
        redirectUri: keys.SFDC_REDIRECT_URI
      }
    });

    conn.login(
      "hector.salesforce@rocketcube.com.mx",
      "RocketCube_200",
      function(err, userInfo) {
        if (err) {
          return console.error(err);
        }
        // Now you can get the access token and instance URL information.
        // Save them to establish connection next time.
        console.log(conn.accessToken);
        console.log(conn.instanceUrl);
        // logged in user property
        console.log("User ID: " + userInfo.id);
        console.log("Org ID: " + userInfo.organizationId);
        // ...
      }
    );
    */
  }
}

module.exports = AuthSalesforce;
