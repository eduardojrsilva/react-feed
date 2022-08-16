import { Like } from './Like';
import { Post } from './Post';

export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
  wallpaper: string;
  posts: Post[];
  likes: Like[];
}
