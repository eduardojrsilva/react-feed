import { Comment } from './Comment';
import { Like } from './Like';
import { User } from './User';

export interface Post {
  id: string;
  owner: User;
  content: string;
  published_at: string;
  link?: string;
  tags?: string[];
  comments: Comment[];
  likes: Like[];
}
