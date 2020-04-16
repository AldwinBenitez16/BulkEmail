const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

// setting the the userID as a cookie id
// this ID is later used in the deserializedUser to get all other information
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// we fetch the googleID and other info using the user.id and scanning mongoDb database
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
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
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (acessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleID: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ googleID: profile.id }).save();
      done(null, user);
    }
  )
);
