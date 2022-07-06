import { ChangeEvent, useState } from 'react';
import { v4 as uuid } from 'uuid';

import BagOfWords from '../../BagOfWords';
import { Input } from '../../Input/styles';
import { TextArea } from '../../TextArea/styles';

import { POSTS } from '../../../utils/Mocks';
import { useAuth } from '../../../providers/Auth';

import { Post } from '../../../model/Post';

import { Button, ButtonsContainer, Container, InputWrapper } from './styles';

interface NewPostProps {
  profile?: boolean;
}

const NewPost: React.FC<NewPostProps> = ({ profile = false }) => {
  const [postContent, setPostContent] = useState('');
  const [isUrlOn, setIsUrlOn] = useState(false);
  const [isTagsOn, setIsTagsOn] = useState(false);
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const { user } = useAuth();

  const handlePublish = (): void => {
    const post: Post = {
      id: uuid(),
      owner: user,
      publishedAt: new Date(Date.now()),
      content: postContent.split('\n'),
      link: url,
      tags,
      likesCount: 0,
      comments: [],
    };

    POSTS.unshift(post);

    setPostContent('');
    setUrl('');
    setTags([]);
    setIsUrlOn(false);
    setIsTagsOn(false);
  };

  const handleChangePostContent = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setPostContent(event.target.value);
  };

  const handleChangeUrl = (event: ChangeEvent<HTMLInputElement>): void => {
    setUrl(event.target.value);
  };

  const handleToggleUrl = (): void => {
    setIsUrlOn((pastValue) => !pastValue);
    setUrl('');
  };

  const handleToggleTags = (): void => {
    setIsTagsOn((pastValue) => !pastValue);
    setTags([]);
  };

  return (
    <Container $profile={profile}>
      <TextArea
        rows={5}
        value={postContent}
        onChange={handleChangePostContent}
        placeholder="Que tal publicar alguma coisa? Digite algo aqui..."
      />
      {postContent.length !== 0 && (
        <>
          {isUrlOn && (
            <InputWrapper>
              <label htmlFor="url">URL: </label>
              <div>
                <Input
                  id="url"
                  value={url}
                  onChange={handleChangeUrl}
                  placeholder="www.example.com"
                />
                <button type="button" onClick={handleToggleUrl}>
                  x
                </button>
              </div>
            </InputWrapper>
          )}
          {isTagsOn && (
            <InputWrapper>
              <label htmlFor="bag-of-words">Tags: </label>
              <div>
                <BagOfWords tags={tags} setTags={setTags} />
                <button type="button" onClick={handleToggleTags}>
                  x
                </button>
              </div>
            </InputWrapper>
          )}
          <ButtonsContainer>
            <div>
              {!isUrlOn && (
                <button type="button" onClick={handleToggleUrl}>
                  Anexar URL
                </button>
              )}
              {!isTagsOn && (
                <button type="button" onClick={handleToggleTags}>
                  Adicionar tags
                </button>
              )}
            </div>
            <Button type="button" onClick={handlePublish}>
              Publicar
            </Button>
          </ButtonsContainer>
        </>
      )}
    </Container>
  );
};

export default NewPost;
