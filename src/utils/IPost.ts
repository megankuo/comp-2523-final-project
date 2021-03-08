export interface IPost {
  id: number;
  content: string;
  author: number; // user id
  createdOn: Date;
  totalLikes: number;
  totalComments: number;

  likedBy: number[]; // array of user ids
  comments: number[]; // array of comment ids
}
