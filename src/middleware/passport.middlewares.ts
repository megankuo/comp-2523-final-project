import passport from "passport";
import PassportConfig from "../areas/authentication/config/PassportConfig";
import { MockAuthenticationService } from "../areas/authentication/services";
import IUser from "../interfaces/user.interface";

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  // Use PassportConfig class here
  const authService = new MockAuthenticationService();
  const localLogin = new PassportConfig(authService, "local");

  // // req.session.passport.user
  // passport.serializeUser(function (user: IUser = localLogin.user, done) {
  //   console.log(user);
  //   done(null, user.email);
  // });

  // // serializeUser creates -> req.sessions.passport.user = the user object retrieved from db

  // passport.deserializeUser(function (email: string, done) {
  //   const user = authService.findUserByEmail(email);
  //   console.log(user);
  //   if (user) {
  //     done(null, user);
  //   } else {
  //     done({ message: "User not found" }, null);
  //   }
  // });

  passport.use(localLogin.strategy);
};
