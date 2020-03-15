const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

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
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          // user is already created in database
          done(null, existingUser);
        } else {
          // user is not yet created
          // create a new user in the database
          new User({ googleID: profile.id }).save().then(user => {
            done(null, user);
          });
        }
      });
    }
  )
);
