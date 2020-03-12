const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

// allows passport to use goggle oauth20 strategy/authentication
// param (clientID, ClientSecret), provided by oauth service
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (acessToken, refreshToken, profile, done) => {
      console.log("acessToken:", acessToken);
      console.log("refreshToken:", refreshToken);
      console.log("profile:", profile);
    }
  )
);
