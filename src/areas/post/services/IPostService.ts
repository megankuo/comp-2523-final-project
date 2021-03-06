import IPost from "../../../interfaces/post.interface";
import IComment from "../../../interfaces/comment.interface";


// ⭐️ Feel free to change this interface in any way you like. It is simply an example...
export default interface IPostService {
  addPost(post: IPost, username: string): void;

  sortPosts(posts: IPost[]): IPost[];

  getAllPosts(username: string): IPost[];

  findById(id: string): IPost | undefined;

  addCommentToPost(
    message: IComment,
    postId: string
  ): IPost | void;

  deletePost(postId: string, posts: IPost[]): IPost[];
}
