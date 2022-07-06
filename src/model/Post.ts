import { Comment } from './Comment';
import { User } from './User';

export interface Post {
  id: string;
  owner: User;
  content: string[];
  publishedAt: Date;
  link?: string;
  tags?: string[];
  likesCount: number;
  comments: Comment[];
}
