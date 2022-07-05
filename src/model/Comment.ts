import { User } from './User';

export interface Comment {
  owner: User;
  message: string[];
  publishedAt: Date;
  likesCount: number;
}
