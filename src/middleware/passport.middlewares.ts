import passport from "passport";
import PassportConfig from "../areas/authentication/config/PassportConfig";
import { MockAuthenticationService } from "../areas/authentication/services";
import IUser from "../interfaces/user.interface";

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  // Use PassportConfig class here
  // const authService = new MockAuthenticationService();
  // const localLogin = new PassportConfig( authService, "local" );
  new PassportConfig(new MockAuthenticationService(), "local");

  // passport.use(localLogin.strategy);
};
