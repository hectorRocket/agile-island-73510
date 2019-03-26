const express = require("express");
const mongoose = require("mongoose");

const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
var passport = require("passport");
var jsforce = require("jsforce");

const keys = require("./config/keys");
require("./models/User.js");
require("./models/Survey.js");
require("./services/passport");
const AuthSalesforce = require("./services/authSalesforce");

mongoose.connect(
  keys.MONGO_URI,
  { useNewUrlParser: true }
);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_KEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);
require("./routes/accountRoutes")(app);

console.log("==== EXITO MOVE TO github");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
