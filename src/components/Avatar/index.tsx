import { Photo } from './styles';

interface AvatarProps {
  avatarUrl: string;
  large?: boolean;
  menuMobile?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ avatarUrl, large = false, menuMobile = false }) => {
  return <Photo src={avatarUrl} alt="" $large={large} $menuMobile={menuMobile} />;
};

export default Avatar;
