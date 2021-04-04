//----------------------------------------
// TODO:                                 |
//----------------------------------------
// 🚀 Configure Passport.js Local Authentication in this file
//    Ensure code is fully typed wherever possible (unless inference can be made)
import passport from "passport";
import * as passportLocal from "passport-local";
import IUser from "../../../interfaces/user.interface";
import { IAuthenticationService, MockAuthenticationService } from "../services";

export default class PassportConfig {
  private _strategy;
  private _user;
  constructor(authService: IAuthenticationService) {
    const LocalStrategy = passportLocal.Strategy;

    this._strategy = new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      // check if user exists in the database
      (email, password, done) => {
        this._user = authService.getUserByEmailAndPassword(email, password);

        return this._user
          ? done(null, this._user)
          : done(null, false, {
              message: "Your login details are not valid. Please try again",
            });
      }
    );
    // req.session.passport.user
    passport.serializeUser(function (user: IUser, done) {
      done(null, user.email);
    });

    // serializeUser creates -> req.sessions.passport.user = the user object retrieved from db

    passport.deserializeUser(function (email: string, done) {
      const user = authService.findUserByEmail(email);
      if (user) {
        done(null, user);
      } else {
        done({ message: "User not found" }, null);
      }
    });
  }

  get strategy(): passportLocal.Strategy {
    return this._strategy;
  }
}
