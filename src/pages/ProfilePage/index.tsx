import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

import Avatar from '../../components/Avatar';
import NewPost from '../../components/Feed/NewPost';
import Post from '../../components/Feed/Post';
import PageWrapper from '../../components/PageWrapper';
import EditUserInfo from './EditUserInfo';

import { POSTS, USERS } from '../../utils/Mocks';
import { useAuth } from '../../providers/Auth';

import { Post as PostType } from '../../model/Post';

import {
  AvatarNameRoleWrapper,
  Container,
  Separator,
  UserInfo,
  UserPosts,
  Wallpaper,
  Warning,
  Wrapper,
} from './styles';

interface Params {
  username: string;
}

const ProfilePage: React.FC = () => {
  const { username }: Params = useParams();
  const [editMode, setEditMode] = useState(false);
  const [userPosts, setUserPosts] = useState<PostType[]>([]);

  const { user: LoggedUser } = useAuth();

  const user = USERS.find(({ name }) => username === name);

  const handleEditMode = (): void => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    setUserPosts(POSTS.filter((post) => post.owner === user));
  }, [user, username]);

  if (!user) {
    return <Warning>Usuário não encontrado</Warning>;
  }

  return (
    <PageWrapper>
      <Container>
        <Wallpaper src={user.HighDefinitionWallpaperUrl} />
        <Wrapper>
          <UserInfo>
            <AvatarNameRoleWrapper>
              <Avatar avatarUrl={user.avatarUrl} large />
              <div>
                <strong>{user.name}</strong>
                <span>{user.role}</span>
              </div>
            </AvatarNameRoleWrapper>

            {!editMode && user === LoggedUser && (
              <button type="button" onClick={handleEditMode}>
                <FiEdit />
                Editar informações
              </button>
            )}
          </UserInfo>

          {user === LoggedUser && <Separator />}

          {editMode ? (
            <EditUserInfo user={user} handleEditMode={handleEditMode} />
          ) : (
            <>
              {user === LoggedUser && <NewPost profile />}

              {!userPosts.length ? (
                <span>
                  {user === LoggedUser
                    ? 'Você ainda não tem nenhuma publicação'
                    : `${user.name} ainda não tem nenhuma publicação`}
                </span>
              ) : (
                <UserPosts>
                  <strong>
                    {user === LoggedUser ? 'Suas postagens:' : `Postagens de ${user.name}:`}
                  </strong>

                  {userPosts.map((post, index) => (
                    <>
                      <Post post={post} />
                      {userPosts.length !== index + 1 && <Separator />}
                    </>
                  ))}
                </UserPosts>
              )}
            </>
          )}
        </Wrapper>
      </Container>
    </PageWrapper>
  );
};

export default ProfilePage;
