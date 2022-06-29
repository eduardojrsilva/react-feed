import { Photo } from './styles';

interface AvatarProps {
  avatarUrl: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatarUrl }) => {
  return <Photo src={avatarUrl} alt="" />;
};

export default Avatar;
