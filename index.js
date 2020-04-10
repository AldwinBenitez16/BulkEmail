const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User"); // initializes schema and connection to mongoDb database using mongoose
require("./models/Survey");
require("./services/passport"); // sets up OAuth and id/user management

mongoose.connect(keys.mongoURI); // connect mongoDb database to mongoose

// creates a new express application
const app = express();

// tell express/app to use cookieSession, in every call
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// Tells app to use passport and session takes the user/session ID from the cookies and and passes it into the deserialized user
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// dynamically set the port to the preset port, or use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
