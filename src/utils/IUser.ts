export default interface IUser {
  length: number;
  compare(leftPos: number, rightPos: number): boolean;
  swap(left: number, right: number): void;

  // account information
  id: number;
  email: string;
  username: string;
  password: string;

  // Optional fields
  firstName?: string;
  lastName?: string;
  photo?: string; // path to image file

  // account activity
  following: number[]; // array of user ids
  followedBy: number[]; // array of user ids
  createdPosts: number[]; // array of original post ids
  repostedPosts: number[]; // array of shared post ids

  //functions
  updatePhoto(newImage: string): void;
}
