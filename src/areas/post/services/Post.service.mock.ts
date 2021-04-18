import IPost from "../../../interfaces/post.interface";
import IPostService from "./IPostService";
import { database, post, posts } from "../../../model/fakeDB";
import { isConstructorDeclaration } from "typescript";
import IComment from "../../../interfaces/comment.interface";

// ⭐️ Feel free to change this class in any way you like. It is simply an example...
export class MockPostService implements IPostService {
  addPost(post: IPost, username: string): void {
    // 🚀 Implement this yourself.
    // throw new Error("Method not implemented.");

    // tried to add post to current user's list of posts
    let userIndex;
    database.users.forEach((user, index) => {
      if (user.username == username) {
        return userIndex = index;
      }
    })

    database.users[userIndex].posts.push(post);
    console.log(post)
  }
  getAllPosts(username: string): IPost[] {
    // 🚀 Implement this yourself.
    let userIndex;
    database.users.forEach((user, index) => {
      if (user.username == username) {

        return userIndex = index;

      }
    })
    return database.users[userIndex].posts
  }
  findById(id: string): IPost {
    // 🚀 Implement this yourself.
    let returnPost: IPost;
    database.users.forEach((user) => {
    user.posts.forEach((post) => {
      if(post.id ===id) {
        return returnPost = post
      }
    })
  })
    return returnPost
}

  addCommentToPost(message: IComment, postId: string): void {
    // 🚀 Implement this yourself.
    let userIndex;
    let postIndex;
    database.users.forEach((user) => {
        user.posts.forEach((post, index) => {
          if(post.id ===postId) {
            return postIndex = index;
          }
        })      
    })

    database.users.forEach((user, index) => {
      user.posts.forEach((post) => {
        if(post.id ===postId) {
          return userIndex = index;
        }
      })      
  })
    database.users[userIndex].posts[postIndex].commentList.push(message)
}

  sortPosts(posts: IPost[]): IPost[] {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }

  deletePost(postId: string, posts: IPost[]): IPost[] {
    let deleteIndex;
  
    posts.forEach((post, index) => {
      if (post.id == postId) {
        return deleteIndex = index;
      }
    })
    posts.splice(deleteIndex, 1)
    return posts
  }
}
