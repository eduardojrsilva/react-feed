import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';

import Avatar from '../../components/Avatar';
import NewPost from '../../components/Feed/NewPost';
import Post from '../../components/Feed/Post';
import PageWrapper from '../../components/PageWrapper';
import EditUserInfo from './EditUserInfo';

import { useAuth } from '../../providers/Auth';
import api from '../../services/api';

import { User } from '../../model/User';

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
  id: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User>({} as User);
  const [editMode, setEditMode] = useState(false);

  const { user: loggedUser } = useAuth();
  const { id }: Params = useParams();

  const isMyProfile = user.id === loggedUser.id;

  const getUser = useCallback(async () => {
    const { data } = await api.get<User>('/user', {
      params: {
        id,
      },
    });

    setUser(data);
  }, [id]);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditMode = (): void => {
    setEditMode(!editMode);
  };

  if (!user) {
    return <Warning>Usuário não encontrado</Warning>;
  }

  return (
    <PageWrapper>
      <Container>
        <Wallpaper src={user.wallpaper} />
        <Wrapper>
          <UserInfo>
            <AvatarNameRoleWrapper>
              <Avatar avatarUrl={user.avatar} large />
              <div>
                <strong>{user.name}</strong>
                <span>{user.role}</span>
              </div>
            </AvatarNameRoleWrapper>

            {!editMode && isMyProfile && (
              <button type="button" onClick={handleEditMode}>
                <FiEdit />
                Editar informações
              </button>
            )}
          </UserInfo>

          {isMyProfile && <Separator />}

          {editMode ? (
            <EditUserInfo user={user} handleEditMode={handleEditMode} />
          ) : (
            <>
              {isMyProfile && <NewPost profile />}

              {!user.posts?.length ? (
                <span>
                  {isMyProfile
                    ? 'Você ainda não tem nenhuma publicação'
                    : `${user.name} ainda não tem nenhuma publicação`}
                </span>
              ) : (
                <UserPosts>
                  <strong>{isMyProfile ? 'Suas postagens:' : `Postagens de ${user.name}:`}</strong>

                  {user.posts.map((post, index) => (
                    <div key={post.id}>
                      <Post post={post} />
                      {user.posts.length !== index + 1 && <Separator />}
                    </div>
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
