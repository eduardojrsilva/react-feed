import { Photo } from './styles';

interface AvatarProps {
  avatarUrl: string;
  large?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ avatarUrl, large = false }) => {
  return <Photo src={avatarUrl} alt="" $large={large} />;
};

export default Avatar;
