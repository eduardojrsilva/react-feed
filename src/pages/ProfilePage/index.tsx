import { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
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

interface Params {
  username: string;
}

const ProfilePage: React.FC = () => {
  const { username }: Params = useParams();
  const [editMode, setEditMode] = useState(false);
  const [userPosts, setUserPosts] = useState<PostType[]>([]);

  const user = USERS.find(({ name }) => username === name) || USERS[0];

  const handleEditMode = (): void => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    setUserPosts(POSTS.filter((post) => post.owner === user));
  }, [user, username]);

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
              <NewPost posts={userPosts} setPosts={setUserPosts} profile />

              {!userPosts.length ? (
                <span>Você ainda não tem nenhuma publicação</span>
              ) : (
                <UserPosts>
                  <strong>Suas postagens:</strong>

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
