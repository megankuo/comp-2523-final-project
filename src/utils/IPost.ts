export default interface IPost {
  id: number;
  content: string;
  author: number; // user id
  createdOn: Date;
  totalLikes: number;
  totalComments: number;
  totalReposts: number;

  likedBy: number[]; // array of user ids
  comments: number[]; // array of comment ids
  repostedBy: number[]; // array of post ids to the reposts

  // functiona
  createPost(postContent: string): void;
  repost(postId: number): void;
  likePost(postId: number): void;
}
