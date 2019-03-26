var jsforce = require("jsforce");

const keys = require("../config/keys");

module.exports = app => {
  app.get("/api/account/sf", (req, res) => {
    res.send("Gracias, chato!");
  });

  app.post("/api/account/sf", async (request, response) => {
    try {
      console.log(request.body);
      response.send(request.body);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  app.get("/api/sf/authorized", async (req, res) => {
    res.redirect(keys.REDIRECT_DOMAIN);
  });

  app.get("/api/oauth2/auth", function(req, res) {
    const oauth2 = new jsforce.OAuth2({
      clientId: keys.SFDC_CLIENT_ID,
      clientSecret: keys.SFDC_CLIENT_SECRET_ID,
      redirectUri: keys.SFDC_REDIRECT_URI
    });
    res.redirect(oauth2.getAuthorizationUrl({}));
  });

  app.get("/api/sf/getAccessToken", function(req, res) {
    const oauth2 = new jsforce.OAuth2({
      clientId: keys.SFDC_CLIENT_ID,
      clientSecret: keys.SFDC_CLIENT_SECRET_ID,
      redirectUri: keys.SFDC_REDIRECT_URI
    });
    const conn = new jsforce.Connection({ oauth2: oauth2 });

    conn.authorize(req.query.code, function(err, userInfo) {
      if (err) {
        return console.error(err);
      }

      const conn2 = new jsforce.Connection({
        instanceUrl: conn.instanceUrl,
        accessToken: conn.accessToken
      });

      conn2.identity(function(err, res) {
        if (err) {
          return console.error(err);
        }
        console.log("user ID: " + res.user_id);
        console.log("organization ID: " + res.organization_id);
        console.log("username: " + res.username);
        console.log("display name: " + res.display_name);
      });



      // EJEMPLO : como llamar el servicio rest de Salesforce expuesto
      // utilizando jsForce !!!!!!
      // http://jsforce.github.io/jsforce/doc/Apex.html
      conn.apex.get('/services/apexrest/API/Account/0011U00000LAQ2sQAH', function(err,resp){
          console.log('=====> respuesta',resp);
          console.log('=====>error',err);
        }
      );
      ////////////////////////////////////////////////////////////////

      res.redirect(keys.REDIRECT_DOMAIN);
    });
  });
};
