import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  id: string;
  owner: User;
  content: string;
  published_at: string;
  link?: string;
  tags?: string[];
  likes_count: number;
  comments: Comment[];
}
