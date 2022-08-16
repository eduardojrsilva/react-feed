/* eslint-disable no-nested-ternary */
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { format, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Avatar from '../../components/Avatar';
import NewPost from '../Dashboard/Feed/NewPost';
import Post from '../Dashboard/Feed/Post';
import PageWrapper from '../../components/PageWrapper';
import MenuTab from '../../components/MenuTab';
import EditUserInfo from './EditUserInfo';

import { useAuth } from '../../providers/Auth';
import api from '../../services/api';

import { User } from '../../model/User';

import {
  AvatarNameRoleWrapper,
  Container,
  Separator,
  StyledTime,
  UserInfo,
  UserPosts,
  Wallpaper,
  Warning,
  Wrapper,
} from './styles';

interface Params {
  id: string;
}

export type PostType = 'userPosts' | 'likedPosts';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User>({} as User);
  const [editMode, setEditMode] = useState(false);
  const [postType, setpostType] = useState<PostType>('userPosts');

  const { user: loggedUser } = useAuth();
  const { id }: Params = useParams();

  const isMyProfile = user.id === loggedUser.id;

  const getUser = useCallback(async () => {
    const { data } = await api.get<User>(`/user/${id}`);

    setUser(data);
  }, [id]);

  useEffect(() => {
    getUser();
    window.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const likedAtDateFormatted = (date: string): string => {
    return format(Date.parse(date), "d 'de' LLLL 'às' HH:mm", {
      locale: pt,
    });
  };

  const likedAtDistanceToNow = (date: string): string => {
    return formatDistanceToNow(Date.parse(date), {
      locale: pt,
      addSuffix: true,
    });
  };

  const handleEditMode = (): void => {
    setEditMode(!editMode);
  };

  const handleChangePostType = (type: PostType): void => {
    setpostType(type);
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

              <MenuTab
                username={user.name}
                postType={postType}
                isMyProfile={isMyProfile}
                changePostType={handleChangePostType}
              />

              {postType === 'userPosts' ? (
                !user.posts?.length ? (
                  <span>
                    {isMyProfile
                      ? 'Você ainda não tem nenhuma publicação'
                      : `${user.name} ainda não tem nenhuma publicação`}
                  </span>
                ) : (
                  <UserPosts>
                    {user.posts.map((post, index) => (
                      <div key={post.id}>
                        <Post post={post} />
                        {user.posts.length !== index + 1 && <Separator />}
                      </div>
                    ))}
                  </UserPosts>
                )
              ) : !user.likes?.length ? (
                <span>
                  {isMyProfile
                    ? 'Você ainda não curtiu nenhuma publicação'
                    : `${user.name} ainda não curtiu nenhuma publicação`}
                </span>
              ) : (
                <UserPosts>
                  {user.likes?.map((like, index) => (
                    <div key={like.id}>
                      <StyledTime
                        title={likedAtDateFormatted(like.liked_at)}
                        dateTime={like.liked_at}
                      >
                        Curtido {likedAtDistanceToNow(like.liked_at)} atrás
                      </StyledTime>

                      <Post post={like.post} linkToProfile={like.owner?.id !== loggedUser.id} />

                      {user.likes.length !== index + 1 && <Separator />}
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
