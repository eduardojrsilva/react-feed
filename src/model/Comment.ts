import { Like } from './Like';
import { User } from './User';

export interface Comment {
  id: string;
  owner: User;
  message: string;
  published_at: string;
  likes: Like[];
}
