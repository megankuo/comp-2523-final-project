import IUser from "../../../interfaces/user.interface";
import { IAuthenticationService } from "./IAuthentication.service";
import WrongCredentialsException from "../../../exceptions/WrongCredentialsException";
import { dbConfigLocal, database } from "../config/DatabaseConfig";
var mysql = require('mysql2');

// ❗️ Implement this class much later, once everything works fine with your mock db
export class AuthenticationService implements IAuthenticationService {
  // ⭐️ _db should be a reference to your real database driver
  _db = mysql.createConnection(dbConfigLocal)
  async findUserByEmail(email: String): Promise<IUser> {
    // 🚀 Talk to your real database here
    throw new Error("Method not implemented.");
  }
  async getUserByEmailAndPassword(email: string, password: string): Promise<IUser> {
    // 🚀 Talk to your real database here
    throw new Error("Method not implemented.");
  }
  public async createUser(user: IUser): Promise<IUser> {
    // throw new Error( "Method not implemented" );
    let sqlInsert = "INSERT INTO user (id, username, firstName, lastName, password, email)VALUES (:id, :username, :firstName, :lastName, :password, :email)";
    const newUser: IUser = {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      email: user.email
    };
    this._db.query(sqlInsert, newUser, function (err, result) {
      if (err) throw err;
      console.log(result)
    });
    return newUser;
  }
}
