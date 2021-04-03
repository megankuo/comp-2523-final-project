import passport from "passport";
import PassportConfig from "../areas/authentication/config/PassportConfig";
import { MockAuthenticationService } from "../areas/authentication/services";

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  // Use PassportConfig class here
  app.use(new PassportConfig(new MockAuthenticationService()));
  app.post("/login", (req, res, next) => {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true,
    })(req, res, next);
  });
};
