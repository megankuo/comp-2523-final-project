import passport from "passport";
import PassportConfig from "../areas/authentication/config/PassportConfig";
import { MockAuthenticationService } from "../areas/authentication/services";

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  // Use PassportConfig class here
  const localLogin = new PassportConfig(new MockAuthenticationService());
  passport.use(localLogin.strategy);
};
