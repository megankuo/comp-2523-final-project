//----------------------------------------
// TODO:                                 |
//----------------------------------------
// 🚀 Configure Passport.js Local Authentication in this file
//    Ensure code is fully typed wherever possible (unless inference can be made)
import passport from "passport";
import { PassportStatic, Strategy } from "passport";
import { IVerifyOptions, IStrategyOptions, Strategy as LocalStrategy } from "passport-local";
import HttpException from "../../../exceptions/HttpException";
import WrongCredentialsException from "../../../exceptions/WrongCredentialsException";
import IUser from "../../../interfaces/user.interface";
import { IAuthenticationService, MockAuthenticationService } from "../services";

export default class PassportConfig {
  private static _localStrategy: LocalStrategy;
  private static _user: IUser;
  private static _strategyOptions: IStrategyOptions = {
    usernameField: "email",
    passwordField: "password",
  };
  private static _authService: IAuthenticationService;

  constructor(authService: IAuthenticationService, strategyType: string) {
    // const LocalStrategy = passportLocal.Strategy;
    PassportConfig._authService = authService;

    PassportConfig._localStrategy = new LocalStrategy(
      PassportConfig._strategyOptions,
      // check if user exists in the database
      async (email, password, done) => {
        try {
          PassportConfig._user = await authService.getUserByEmailAndPassword(email, password);
          return done(null, PassportConfig._user);
        } catch (e) {
          done(null, false, e);
        }
      }
    );
    // req.session.passport.user
    passport.serializeUser(function (user: IUser, done) {
      done(null, user.email);
    });

    // serializeUser creates -> req.sessions.passport.user = the user object retrieved from db

    passport.deserializeUser(async function (email: string, done) {
      const user = await authService.findUserByEmail(email);
      user ? done(null, user) : done({ message: "user not found" }, null);
    });
  }

  get strategy(): LocalStrategy {
    return PassportConfig._localStrategy;
  }
  get user(): IUser {
    return PassportConfig._user;
  }
}
