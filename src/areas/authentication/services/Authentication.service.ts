import IUser from "../../../interfaces/user.interface";
import { IAuthenticationService } from "./IAuthentication.service";
import WrongCredentialsException from "../../../exceptions/WrongCredentialsException";
import { dbConfigHeroku, database } from "../config/DatabaseConfig";
import bcrypt from "bcrypt";
import { isUnparsedPrepend } from "typescript";

var mysql = require('mysql2');

// ❗️ Implement this class much later, once everything works fine with your mock db
export class AuthenticationService implements IAuthenticationService {
  // ⭐️ _db should be a reference to your real database driver
  _db = mysql.createConnection(dbConfigHeroku)

  public async findUserByUsername(username: String): Promise<IUser> {
    let findUser = "SELECT username FROM user";
    if (username == findUser) {
      throw new Error("This username has already been registered.");
    }
    return;
  }

  public async findUserByEmail(email: String): Promise<IUser> {
    let findEmail = "SELECT email FROM user";
    if (email == findEmail) {
      throw new Error("This email has already been registered.");
    }
    return;
  }

  public async findUserByEmailAndPassword(email: string, password: string): Promise<IUser> {
    let findEmail = "SELECT email FROM user";
    let findPassword = "SELECT password from WHERE user email =" + '"' + email + '"' + ";";
    if (email == findEmail || password == findPassword) {
      mysql.connection.release();
      throw new Error("This email has already been registered.");
    }
    return;
  }

  public async createUser(user: IUser): Promise<IUser> {
    const saltRounds = 10;

    let sqlInsert = "INSERT INTO user (id, username, firstName, lastName, password, email)VALUES (:id, :username, :firstName, :lastName, :password, :email)";
    const newUser: IUser = {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      // password: await bcrypt.genSalt(user.password, saltRounds), // Attempted to add bcrypt to salt password
      email: user.email
    };
    this._db.query(sqlInsert, newUser, function (err, result) {
      if (err) throw err;
    });
    return newUser;
  }
}
