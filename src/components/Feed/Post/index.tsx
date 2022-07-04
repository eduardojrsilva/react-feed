import { format, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { ChangeEvent, useState } from 'react';
import { FiMessageCircle, FiThumbsUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Comment as CommentType, Post as PostType, POSTS, USERS } from '../../../utils/Mocks';
import Avatar from '../../Avatar';
import { TextArea } from '../../TextArea/styles';
import Comment from '../Comments';
import {
  CommentsContainer,
  Container,
  Identification,
  InteractionsBar,
  Links,
  NameRoleWrapper,
  PostContent,
  PostHeader,
  Tags,
} from './styles';

interface PostProps {
  post: PostType;
  linkToProfile?: boolean;
}

const Post: React.FC<PostProps> = ({ post, linkToProfile = false }) => {
  const [activeLike, setActiveLike] = useState(false);
  const [activeComment, setActiveComment] = useState(false);
  const [postComment, setPostComment] = useState('');

  const publishedAtDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: pt,
  });

  const publishedAtDistanceToNow = formatDistanceToNow(post.publishedAt, {
    locale: pt,
    addSuffix: true,
  });

  const handleLike = (): void => {
    setActiveLike(!activeLike);
  };

  const handleOpenCloseComment = (): void => {
    setActiveComment(!activeComment);
  };

  const handleChangePostComment = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setPostComment(event.target.value);
  };

  const handleComment = (): void => {
    const comment: CommentType = {
      owner: USERS[0],
      message: postComment.split('\n'),
      likesCount: 0,
      publishedAt: new Date(Date.now()),
    };

    POSTS[0].comments.push(comment);

    setPostComment('');
  };

  return (
    <Container>
      <PostHeader>
        <Identification>
          <Avatar avatarUrl={post.owner.avatarUrl} />
          <NameRoleWrapper>
            {linkToProfile ? (
              <Link to={`../profile/${post.owner.name}`}>
                <strong>{post.owner.name}</strong>
              </Link>
            ) : (
              <strong>{post.owner.name}</strong>
            )}
            <span>{post.owner.role}</span>
          </NameRoleWrapper>
        </Identification>

        <time title={publishedAtDateFormatted} dateTime={post.publishedAt.toString()}>
          Publicado {publishedAtDistanceToNow} atrás
        </time>
      </PostHeader>
      <PostContent>
        {post.content.map((line) => (
          <>
            <span>{line}</span>
            <br />
          </>
        ))}
        {(post.tags || post.link) && (
          <Links>
            {post.link && (
              <>
                <span>👉 </span>
                <a href={post.link}>{post.link}</a>
              </>
            )}
            <Tags>
              {post.tags?.map((tag) => (
                <a href={`/tags/${tag}`}>#{tag}</a>
              ))}
            </Tags>
          </Links>
        )}
      </PostContent>

      <InteractionsBar $activeLike={activeLike}>
        <div>
          <button type="button" onClick={handleLike}>
            <FiThumbsUp />
          </button>

          <span>{post.likesCount}</span>
        </div>
        <div>
          <button type="button" onClick={handleOpenCloseComment}>
            <FiMessageCircle />
          </button>

          <span>{post.comments.length}</span>
        </div>
      </InteractionsBar>

      {activeComment && (
        <CommentsContainer>
          <strong>Deixe seu feedback</strong>
          <TextArea
            value={postComment}
            onChange={handleChangePostComment}
            rows={3}
            placeholder="Escreva um comentário..."
          />
          {postComment.length !== 0 && (
            <button type="button" onClick={handleComment}>
              Comentar
            </button>
          )}
          {post.comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </CommentsContainer>
      )}
    </Container>
  );
};

export default Post;
