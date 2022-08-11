import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { FiMessageCircle, FiThumbsUp } from 'react-icons/fi';
import { v4 as uuid } from 'uuid';

import Avatar from '../../Avatar';
import Comment from '../Comments';
import { TextArea } from '../../TextArea/styles';

import { useAuth } from '../../../providers/Auth';

import { Comment as CommentType } from '../../../model/Comment';
import { Post as PostType } from '../../../model/Post';

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

  const { user } = useAuth();

  // const publishedAtDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm", {
  //   locale: pt,
  // });

  // const publishedAtDistanceToNow = formatDistanceToNow(post.publishedAt, {
  //   locale: pt,
  //   addSuffix: true,
  // });

  const handleLike = (): void => {
    // eslint-disable-next-line no-param-reassign
    post.likesCount += activeLike ? -1 : 1;

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
      id: uuid(),
      owner: user,
      message: postComment.split('\n'),
      likesCount: 0,
      publishedAt: new Date(Date.now()),
    };

    // add comment

    setPostComment('');
  };

  return (
    <Container>
      <PostHeader>
        <Identification>
          <Avatar avatarUrl={post.owner.avatar} />
          <NameRoleWrapper>
            {linkToProfile ? (
              <Link to={`../profile/${post.owner.id}`}>
                <strong>{post.owner.name}</strong>
              </Link>
            ) : (
              <strong>{post.owner.name}</strong>
            )}
            <span>{post.owner.role}</span>
          </NameRoleWrapper>
        </Identification>

        <time /* title={publishedAtDateFormatted} dateTime={post.publishedAt.toString()} */>
          Publicado {/* publishedAtDistanceToNow */} 2 horas atrás
        </time>
      </PostHeader>
      <PostContent>
        {post.content.split('\n').map((line) => (
          <div key={`${post.id}-${line}`}>
            <span>{line}</span>
            <br />
          </div>
        ))}
        {(post.tags || post.link) && (
          <Links>
            {post.link && (
              <>
                <span>👉 </span>
                <a href={post.link} target="_blank" rel="noreferrer">
                  {post.link}
                </a>
              </>
            )}
            <Tags>
              {post.tags?.map((tag) => (
                <a href={`/tags/${tag}`} key={`${post.id}-${tag} `}>
                  #{tag}
                </a>
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

          <span>{post.comments?.length}</span>
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
            <Comment comment={comment} postId={post.id} key={comment.id} />
          ))}
        </CommentsContainer>
      )}
    </Container>
  );
};

export default Post;
