import Avatar from '../../../components/Avatar';

import { User } from '../../../model/User';

import { Container, Content, StyledLink, ViewProfileContainer, Wallpaper } from './styles';

interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <Container>
      <Wallpaper src={user.wallpaper} alt="" />
      <Content>
        <Avatar avatarUrl={user.avatar} />
        <strong>{user.name}</strong>
        <span>{user.role}</span>
      </Content>
      <ViewProfileContainer>
        <StyledLink to={`/profile/${user.id}`}>Visualizar Perfil</StyledLink>
      </ViewProfileContainer>
    </Container>
  );
};

export default Profile;
