import IUser from "../../../interfaces/user.interface";
import { IAuthenticationService } from "./IAuthentication.service";
import WrongCredentialsException from "../../../exceptions/WrongCredentialsException";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

import { dbConfigLocal, database } from "../config/DatabaseConfig";
var mysql = require('mysql2');

// ❗️ Implement this class much later, once everything works fine with your mock db
export class AuthenticationService implements IAuthenticationService {
  // ⭐️ _db should be a reference to your real database driver
  _db = mysql.createPool(dbConfigLocal)
  async findUserByEmail(email: String): Promise<IUser> {
    // 🚀 Talk to your real database here
    throw new Error("Method not implemented.");
  }
  async getUserByEmailAndPassword(email: string, password: string): Promise<IUser> {
    // 🚀 Talk to your real database here
    throw new Error("Method not implemented.");
  }
  public async createUser(user: Omit<IUser, "id">): Promise<IUser> {
    // throw new Error( "Method not implemented" );
    const newUser: IUser = {
      id: nanoid(),
      username: user.username,
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    console.log(this._db)
    // this._db.user.push(newUser);
    return newUser;
  }
}
