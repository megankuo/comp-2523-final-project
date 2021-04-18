import express from "express";
import passport from "passport";
import IController from "../../../interfaces/controller.interface";
import IUser from "../../../interfaces/user.interface";
import { IAuthenticationService } from "../services";
import { nanoid } from "nanoid";

// Effort at implementing local MySQL database / ClearDB on Heroku

class AuthenticationController implements IController {
  public path = "/auth";
  public router = express.Router();
  private _authService: IAuthenticationService;

  constructor(service: IAuthenticationService) {
    this.initializeRoutes();
    this._authService = service;
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/register`, this.showRegistrationPage);
    this.router.post(`${this.path}/register`, this.registration);
    this.router.get(`${this.path}/login`, this.showLoginPage);
    this.router.post(
      `${this.path}/login`,
      passport.authenticate("local", {
        successRedirect: "/posts",
        failureRedirect: "/auth/login",
      })
    );
    this.router.get(`${this.path}/logout`, this.logout);
  }

  private showLoginPage = (_: express.Request, res: express.Response) => {
    res.render("authentication/views/login");
  };

  private showRegistrationPage = (_: express.Request, res: express.Response) => {
    res.render("authentication/views/register");
  };

  // 🔑 These Authentication methods needs to be implemented by you
  private login = async (req: express.Request, res: express.Response, next: express.NextFunction) => {};
//   private registration = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     const newUser: Omit<IUser, "id"> = {
//       username: "tempname",
//       email: "tempemail",
//       password: "temppw",
//       firstName: "fname",
//       lastName: "lname",
//     };
//     this._authService.createUser(newUser);
//     return res.redirect("/login");
//   };
//   private logout = async (req: express.Request, res: express.Response) => {
//     req.logOut(); // will destroy the current session
//     res.redirect("/auth/login");
//   };
// }

// Efforrt for inserting into MySQL database instead of locally
  private registration = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let newUser: IUser = {
      id: nanoid(),
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email
    };
    this._authService.createUser(newUser);
    return res.redirect("/login");
  }
  private logout = async (req: express.Request, res: express.Response) => {
    req.logOut(); // will destroy the current session
    res.redirect("/auth/login");
  };
}

export default AuthenticationController;
