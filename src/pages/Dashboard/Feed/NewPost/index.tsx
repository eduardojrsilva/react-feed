import { ChangeEvent, useCallback, useState } from 'react';

import BagOfWords from '../../../../components/BagOfWords';
import { Input } from '../../../../components/Input/styles';
import { TextArea } from '../../../../components/TextArea/styles';

import { useAuth } from '../../../../providers/Auth';
import { useToast } from '../../../../providers/Toast';
import api from '../../../../services/api';

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
  const { addToast } = useToast();

  const handlePublish = useCallback(async () => {
    try {
      await api.post('post', {
        id_owner: user.id,
        content: postContent,
        link: url,
        tags,
      });

      setPostContent('');
      setUrl('');
      setTags([]);
      setIsUrlOn(false);
      setIsTagsOn(false);
    } catch {
      addToast({
        title: 'Erro',
        description: 'Erro ao publicar post',
        type: 'error',
      });
    }
  }, [addToast, user.id, postContent, url, tags]);

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
