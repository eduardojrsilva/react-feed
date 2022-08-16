import { PostType } from '../../pages/ProfilePage';
import { Container, MenuItem } from './styles';

interface MenuBarProps {
  username: string;
  postType: string;
  changePostType: (type: PostType) => void;
  isMyProfile: boolean;
}

const MenuBar: React.FC<MenuBarProps> = ({ username, postType, isMyProfile, changePostType }) => {
  const menuItems = isMyProfile
    ? ['Minhas Postagens', 'Postagens Curtidas']
    : [`Postagens de ${username}`, `Postagens curtidas por ${username}`];

  return (
    <Container>
      <MenuItem $isActive={postType === 'userPosts'} onClick={() => changePostType('userPosts')}>
        {menuItems[0]}
      </MenuItem>

      <MenuItem $isActive={postType === 'likedPosts'} onClick={() => changePostType('likedPosts')}>
        {menuItems[1]}
      </MenuItem>
    </Container>
  );
};

export default MenuBar;
