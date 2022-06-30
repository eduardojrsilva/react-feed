import { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import Avatar from '../../components/Avatar';
import NewPost from '../../components/Feed/NewPost';
import Post from '../../components/Feed/Post';
import PageWrapper from '../../components/PageWrapper';
import { Post as PostType, POSTS, USERS } from '../../utils/Mocks';
import EditUserInfo from './EditUserInfo';
import {
  AvatarNameRoleWrapper,
  Container,
  Separator,
  UserInfo,
  UserPosts,
  Wallpaper,
  Wrapper,
} from './styles';

const user = USERS[0];

const ProfilePage: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const [userPosts, setUserPosts] = useState<PostType[]>([]);

  const handleEditMode = (): void => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    setUserPosts(POSTS.filter((post) => post.owner === user));
  }, []);

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

            {!editMode && (
              <button type="button" onClick={handleEditMode}>
                <FiEdit />
                Editar informações
              </button>
            )}
          </UserInfo>

          <Separator />

          {editMode ? (
            <EditUserInfo user={user} handleEditMode={handleEditMode} />
          ) : (
            <>
              <NewPost posts={userPosts} setPosts={setUserPosts} />

              {!userPosts.length ? (
                <span>Você ainda não tem nenhuma publicação</span>
              ) : (
                <UserPosts>
                  <strong>Suas postagens:</strong>

                  {userPosts.map((post, index) => (
                    <>
                      <Post post={post} />
                      {POSTS.length + 1 !== index && <Separator />}
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
