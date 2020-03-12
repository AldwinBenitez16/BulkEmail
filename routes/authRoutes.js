const passport = require("passport");

module.exports = app => {
  // authentication route handler
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // authentication callback route hanlder
  app.get("/auth/google/callback", passport.authenticate("google"));
};
