//----------------------------------------
// TODO:                                 |
//----------------------------------------
// 🚀 Configure Passport.js Local Authentication in this file
//    Ensure code is fully typed wherever possible (unless inference can be made)
import * as passportLocal from "passport-local";
import { IAuthenticationService } from "../services";

const LocalStrategy = passportLocal.Strategy;

export default class PassportConfig {
  private _localLogin;
  private _user;

  constructor(authService: IAuthenticationService) {
    this._localLogin = new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      // check if user exists in the database
      async (email, password, done) => {
        this._user = await authService.getUserByEmailAndPassword(email, password);
        return this._user
          ? done(null, this._user)
          : done(null, false, {
              message: "Your login details are not valid. Please try again",
            });
      }
    );
  }

  public get strategy(): passportLocal.Strategy {
    return this._localLogin;
  }
}
