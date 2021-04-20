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
    PassportConfig._authService = authService;
    PassportConfig._localStrategy = new LocalStrategy(PassportConfig._strategyOptions, PassportConfig.signIn);
    passport.use(PassportConfig._localStrategy);
    passport.serializeUser(PassportConfig.serializeUser);
    passport.deserializeUser(PassportConfig.deserializeUser);
  }

  private static serializeUser(user: IUser, done: (err: any, id?: string) => void): void {
    done(null, user.email);
  }

  private static async deserializeUser(email: string, done: (err: any, user?: Express.User | false | null) => void) {
    try {
      const user = await PassportConfig._authService.findUserByEmail(email);
      return done(null, user);
    } catch (e) {
      done({ message: "user not found" }, null);
    }
  }

  private static async signIn(email: string, password: string, done) {
    try {
      PassportConfig._user = await PassportConfig._authService.getUserByEmailAndPassword(email, password);
      return done(null, PassportConfig._user);
    } catch (e) {
      done(null, false, e);
    }
  }

  get strategy(): LocalStrategy {
    return PassportConfig._localStrategy;
  }
  get user(): IUser {
    return PassportConfig._user;
  }
}
