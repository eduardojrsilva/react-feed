import { User } from '../../utils/Mocks';
import Avatar from '../Avatar';
import { Container, Content, ViewProfileContainer, Wallpaper } from './styles';

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <Container>
      <Wallpaper src={user.wallpaperUrl} alt="" />
      <Content>
        <Avatar avatarUrl={user.avatarUrl} />
        <strong>{user.name}</strong>
        <span>{user.role}</span>
      </Content>
      <ViewProfileContainer>
        <button type="button">Visualizar Perfil</button>
      </ViewProfileContainer>
    </Container>
  );
};

export default Profile;
