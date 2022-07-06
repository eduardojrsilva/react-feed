import { User } from './User';

export interface Comment {
  id: string;
  owner: User;
  message: string[];
  publishedAt: Date;
  likesCount: number;
}
