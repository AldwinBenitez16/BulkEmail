const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// creates a new express application
const app = express();

// allows passport to use goggle oauth20 strategy/authentication
// param (clientID, ClientSecret), provided by oauth service
passport.use(new GoogleStrategy());

// dynamically set the port to the preset port, or use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
