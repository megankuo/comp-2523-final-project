import { database } from "../../../model/fakeDB";
import IUser from "../../../interfaces/user.interface";
import { IAuthenticationService } from "./IAuthentication.service";
import WrongCredentialsException from "../../../exceptions/WrongCredentialsException";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";

export class MockAuthenticationService implements IAuthenticationService {
  findUserByUsername ( username: String ): Promise<IUser> {
    throw new Error( "Method not implemented." );
  }
  findUserByEmailAndPassword ( email: string, password: string ): Promise<IUser> {
    throw new Error( "Method not implemented." );
  }
  readonly _db = database;

  public async getUserByEmailAndPassword(email: string, password: string): Promise<IUser> {
    // throw new Error( "Method not implemented" );
    const userObj = this._db.users.find((user) => user.email === email && user.password === password);
    if (userObj) {
      if (userObj.password !== password) {
        throw new WrongCredentialsException();
      } else {
        return userObj;
      }
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  }

  public async findUserByEmail(email: string): Promise<null | IUser> {
    // throw new Error( "Method not implemented" );
    const userObj = this._db.users.find((user) => user.email === email);
    if (userObj) {
      return userObj;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  }

  public async createUser(user: Omit<IUser, "id">): Promise<IUser> {
    // throw new Error( "Method not implemented" );
    const newUser: IUser = {
      id: nanoid(),
      username: user.username,
      email: user.email,
      password: await bcrypt(user.firstName, 10),
      firstName: user.firstName,
      lastName: user.lastName,
    };
    this._db.users.push(newUser);
    return newUser;
  }
}
