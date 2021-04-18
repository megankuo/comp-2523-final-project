import IPost from "../../../interfaces/post.interface";
import IPostService from "./IPostService";
import { database, posts } from "../../../model/fakeDB";

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
    throw new Error("Method not implemented.");
  }
  addCommentToPost(message: { id: string; createdAt: string; userId: string; message: string }, postId: string): void {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
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
