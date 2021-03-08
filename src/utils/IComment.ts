export interface IComment {
  id: number;
  replyTo: number; // post or comment id
  content: string;
  author: number; // user id
  createdOn: Date;
  totalLikes: number;

  likedBy: number[]; // array of user ids
  comments: number[]; // array of comment ids
}
