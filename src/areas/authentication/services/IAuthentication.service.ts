// import IPost from "./post.interface";
import IUser from "../../../interfaces/user.interface";

// ⭐️ Feel free to change this interface in any way you like. It is simply an example...
export interface IAuthenticationService {
  _db: any;
  findUserByEmail(email: string): Promise <IUser>;

  findUserByUsername(username: String): Promise<IUser>;

  createUser(user: Omit<IUser, "id">): Promise<IUser>;

  findUserByEmailAndPassword(email: string, password: string): Promise<IUser>;
}
