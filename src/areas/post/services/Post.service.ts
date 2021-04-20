import IPost from "../../../interfaces/post.interface";
import IPostService from "./IPostService";
import {database, dbConfigHeroku} from "../../../databaseConnection"
import { callbackify } from "node:util";
import IComment from "../../../interfaces/comment.interface";
import mysql from "mysql2"


// ❗️ Implement this class much later, once everything works fine with your mock db
export class PostService implements IPostService {
  _db = mysql.createConnection(dbConfigHeroku);
  addPost(post: IPost, username: string): void {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
  getAllPosts(username: string): IPost[] {
    // 🚀 Implement this yourself.
    let sqlQuery = "SELECT post_id, username, message, likes, reposts, date_created from post INNER JOIN user on post.user_id = user.user_id;"
    let params = {
      username: username
    }
    this._db.query(sqlQuery, (err, results, fields) => {
      if (err) {
        console.log("Something wrong with getallposts");
      } else {
        // console.log(results);
        // console.log(`Post id: ${results[0].post_id}\n Message: ${results[0].message}\n User id: ${results[0].user_id}\n Username: ${results[0].username}` )
        let postArr = []
        let i=0;
        for(i=0; i < results.length; i++) {
          let post = {
            id: results[i].post_id,
            message: results[i].message,
            userId: results[i].user_id,
            username: results[i].username,
            createdAt: results[i].date_created,
            likes: 0,
            reposts: 0,
            comments: 0,
          }
          postArr.push(post)
        }
        console.log('This is from post.service')
        // return results;
        
        console.log(postArr)
        return postArr;
        
      }
    })
  }
  findById(id: string): IPost {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
  addCommentToPost(message: IComment, postId: string): void {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }

  sortPosts(posts: IPost[]): IPost[] {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
  deletePost(postId: string, posts: IPost[]): IPost[] {
  }
}
