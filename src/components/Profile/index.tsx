import Avatar from '../Avatar';

import { User } from '../../utils/Mocks';

import { Container, Content, StyledLink, ViewProfileContainer, Wallpaper } from './styles';

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
        <StyledLink to={`/profile/${user.name}`}>Visualizar Perfil</StyledLink>
      </ViewProfileContainer>
    </Container>
  );
};

export default Profile;
