import { Post } from './Post';
import { User } from './User';

export interface Like {
  id: string;
  owner: User;
  post: Post;
  liked_at: string;
}
