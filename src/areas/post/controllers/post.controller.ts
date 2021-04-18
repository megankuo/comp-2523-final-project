import { Request, Response, NextFunction, Router } from "express";
import IController from "../../../interfaces/controller.interface";
import IPostService from "../services/IPostService";
import nanoid from "nanoid"
// for mock
// import { database, post, posts } from "../../../model/fakeDB";
import IUser from "../../../interfaces/user.interface";
import IPost from "../../../interfaces/post.interface";

import database from "../../../databaseConnection"

import { ensureAuthenticated } from "../../../middleware/authentication.middleware";
import IComment from "src/interfaces/comment.interface";

class PostController implements IController {
  public path = "/posts";
  public router = Router();
  private _postService: IPostService;
  
  constructor(postService: IPostService) {
    this.initializeRoutes();
    this._postService = postService;
  }

  private initializeRoutes () {
    // this.router.use( ensureAuthenticated );
    this.router.get(this.path, this.getAllPosts);
    this.router.get(`${this.path}/:id`, this.getPostById);
    this.router.post(`${this.path}/delete`, this.deletePost);
    this.router.post(`${this.path}/:id/comment`, this.createComment);
    this.router.post(`${this.path}`, this.createPost);
  }

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary posts object
  
  private getAllPosts = (req: Request, res: Response) => {
    // when using mock
    // const user = req.user
    const username = req.user.username;
    res.render("post/views/posts", { posts: this._postService.getAllPosts(username), user: req.user });
   
    // database.getConnection((err, dbConnection) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     res.render("post/views/posts", { posts: this._postService.getAllPosts(userId)})
    //   }
      
    // })
    
  };

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary post object
  private getPostById = async (req: Request, res: Response, next: NextFunction) => {
    // when using mock
    const post = await this._postService.findById(req.params.id);
    res.render("post/views/post", { post, user: req.user });

    // when using clearDB if it works

  };

  // 🚀 These post methods needs to be implemented by you
  private createComment = async (req: Request, res: Response, next: NextFunction) => {
    const newComment: IComment = {
      id: `${Math.floor(Math.random() * 1000000)}`,
      message: req.body.commentText,
      userId: req.user.id,
      username: req.user.username,
      createdAt: new Date
    }
    await this._postService.addCommentToPost(newComment, req.body.thePost)
    res.redirect("back")
  };

  private createPost = async (req: Request, res: Response, next: NextFunction) => {
    console.log("creating post")
    const user = req.user
    const newPost: IPost = {
      //maybe use nanoid() to get the random postId string
      id: `${Math.floor(Math.random() * 1000000)}`,
      message: req.body.postText,
      commentList: [],
      userId: user.id,
      username: user.username,
      createdAt: new Date,
      likes: 0,
      reposts: 0,
      comments: 0
    }
    await this._postService.addPost(newPost, user.username)
    // res.render("post/views/posts", { posts: this._postService.getAllPosts(user)});
    res.redirect("/posts");
  };

  private deletePost = async (req: Request, res: Response, next: NextFunction) => {
    const deletePostId = req.body.postToDelete;
    const posts = this._postService.getAllPosts(req.user.username);
    await this._postService.deletePost(deletePostId, posts);
    // res.render("post/views/posts", { posts: this._postService.getAllPosts(user)});
    res.redirect("/posts");

  };
}

export default PostController;
