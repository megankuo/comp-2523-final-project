// import IPost from "../../../interfaces/post.interface";
// import IPostService from "./IPostService";
// import database from "../../../databaseConnection"
// import { callbackify } from "node:util";
// import IComment from "src/interfaces/comment.interface";

// // ❗️ Implement this class much later, once everything works fine with your mock db
// export class PostService implements IPostService {
//   readonly _db = database;
//   addPost(post: IPost, username: string): void {
//     // 🚀 Implement this yourself.
//     throw new Error("Method not implemented.");
//   }
//   // getAllPosts(username: string): IPost[] {
//   //   // 🚀 Implement this yourself.
//   //   let sqlQuery = "SELECT post_id, username, message, likes, reposts, date_created from post INNER JOIN user on post.user_id = user.user_id;"
//   //   this._db.query(sqlQuery, (err, results, fields) => {
//   //     return results
//   //   })
//   // }
//   findById(id: string): IPost {
//     // 🚀 Implement this yourself.
//     throw new Error("Method not implemented.");
//   }
//   addCommentToPost(message: IComment, postId: string): void {
//     // 🚀 Implement this yourself.
//     throw new Error("Method not implemented.");
//   }

//   sortPosts(posts: IPost[]): IPost[] {
//     // 🚀 Implement this yourself.
//     throw new Error("Method not implemented.");
//   }
//   deletePost(postId: string, posts: IPost[]): IPost[] {
//   }
// }
