import { Request, Response, NextFunction, Router } from "express";
import IController from "../../../interfaces/controller.interface";
import IPostService from "../services/IPostService";
import { database, post, posts } from "../../../model/fakeDB";
import IUser from "../../../interfaces/user.interface";
import IPost from "../../../interfaces/post.interface";

import { ensureAuthenticated } from "../../../middleware/authentication.middleware";

class PostController implements IController {
  public path = "/posts";
  public router = Router();
  private _postService: IPostService;
  
  constructor(postService: IPostService) {
    this.initializeRoutes();
    this._postService = postService;
  }

<<<<<<< HEAD
  private initializeRoutes () {
=======
  private initializeRoutes() {
>>>>>>> 216a77945660185ed683adfe4dcc1f1274e78945
    // this.router.use( ensureAuthenticated );
    this.router.get(this.path, this.getAllPosts);
    this.router.get(`${this.path}/:id`, this.getPostById);
    this.router.post(`${this.path}/delete`, this.deletePost);
    this.router.post(`${this.path}/:id/comment`, this.createComment);
    this.router.post(`${this.path}`, this.createPost);
  }

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary posts object
  
  private getAllPosts = (req: Request, res: Response) => {
    const user = req.user.username
    res.render("post/views/posts", { posts: this._postService.getAllPosts(user) });
  };

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary post object
  private getPostById = async (request: Request, res: Response, next: NextFunction) => {
    res.render("post/views/post", { post });
  };

  // 🚀 These post methods needs to be implemented by you
  private createComment = async (req: Request, res: Response, next: NextFunction) => {};

  private createPost = async (req: Request, res: Response, next: NextFunction) => {
    console.log("creating post")
    const user = req.user.username
    const newPost: IPost = {
      //maybe use nanoid() to get the random postId string
      postId: `${Math.floor(Math.random() * 1000000)}`,
      message: req.body.postText,
      commentList: [],
      userId: user,
      createdAt: new Date,
      likes: 0,
      reposts: 0,
      comments: 0
    }
    this._postService.addPost(newPost, user)
    // res.render("post/views/posts", { posts: this._postService.getAllPosts(user)});
    res.redirect("/posts");
  };

  private deletePost = async (req: Request, res: Response, next: NextFunction) => {
    console.log("deleting post")
    const user = req.user.username
    const deletePostId = req.body.postToDelete
    const posts = this._postService.getAllPosts(user)
    console.log("delete post Id is below")
    console.log(deletePostId)
    this._postService.deletePost(deletePostId, posts)
    // res.render("post/views/posts", { posts: this._postService.getAllPosts(user)});
    res.redirect("/posts");

  };
}

export default PostController;
