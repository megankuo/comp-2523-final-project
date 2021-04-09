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

  private initializeRoutes () {
    this.router.use( ensureAuthenticated );
    this.router.get(this.path, this.getAllPosts);
    this.router.get(`${this.path}/:id`, this.getPostById);
    this.router.get(`${this.path}/:id/delete`, this.deletePost);
    this.router.post(`${this.path}`, this.createPost);
    this.router.post(`${this.path}/:id/comment`, this.createComment);
  }

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary posts object
  
  private getAllPosts = (req: Request, res: Response) => {
    console.log(posts);
    console.log(req.user);
    res.render("post/views/posts", { posts });
  };

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary post object
  private getPostById = async (request: Request, res: Response, next: NextFunction) => {
    res.render("post/views/post", { post });
  };

  // 🚀 These post methods needs to be implemented by you
  private createComment = async (req: Request, res: Response, next: NextFunction) => {};

  private createPost = async (req: Request, res: Response, next: NextFunction) => {
    // const user = req.user as IUser;
    const user = database.users[0].username
    console.log(req.body.postText)
    console.log("please work")
    const newPost: IPost = {
      id: `a ${posts.length++}`,
      message: req.body.postText,
      commentList: [],
      userId: "billgates",
      createdAt: new Date,
      likes: 0,
      reposts: 0,
      comments: 0
    }
    this._postService.addPost(newPost, user);
    console.log(posts)
    res.render("post/views/posts", { posts });
    // res.render("post/views/posts", { posts: user.posts });
  };
  private deletePost = async (req: Request, res: Response, next: NextFunction) => {};
}

export default PostController;
