import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useToast } from '../../providers/Toast';
import api from '../../services/api';

import { Input } from '../../components/Input/styles';
import { Space } from '../../components/Space/styles';

import {
  Button,
  Container,
  FormContainer,
  LabelInputWrapper,
  Loading,
  SpaceComponent,
} from './styles';

const CreateAcount: React.FC = () => {
  const [isLoaderOn, setIsLoaderOn] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsLoaderOn(true);

      try {
        await api.post('user/create', {
          email,
          name,
          role,
          password,
          passwordConfirmation,
        });

        addToast({
          title: 'Sucesso',
          description: 'Sua conta foi criada com sucesso',
          type: 'success',
        });

        history.push('/login');
      } catch {
        addToast({
          title: 'Erro',
          description: 'Erro ao criar conta',
          type: 'error',
        });
      } finally {
        setIsLoaderOn(false);
      }
    },
    [addToast, email, name, role, password, passwordConfirmation, history],
  );

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleRoleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setRole(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmationChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPasswordConfirmation(event.target.value);
  };

  return (
    <Container>
      <FormContainer onSubmit={(event) => handleSubmit(event)}>
        <h1>Cadastre-se</h1>

        <LabelInputWrapper>
          <label htmlFor="email">E-mail</label>

          <Input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="user@email.com"
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <label htmlFor="name">Nome</label>

          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Nome"
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <label htmlFor="password">Cargo</label>

          <Input
            type="text"
            id="role"
            value={role}
            onChange={handleRoleChange}
            placeholder="Cargo"
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <label htmlFor="password">Senha</label>

          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="********"
          />
        </LabelInputWrapper>

        <LabelInputWrapper>
          <label htmlFor="password-confirmation">Confirme sua Senha</label>

          <Input
            type="password"
            id="password-confirmation"
            value={passwordConfirmation}
            onChange={handlePasswordConfirmationChange}
            placeholder="********"
          />
        </LabelInputWrapper>

        <Button type="submit" $isLoading={isLoaderOn}>
          <SpaceComponent />
          Enviar
          {isLoaderOn ? <Loading /> : <SpaceComponent />}
        </Button>
      </FormContainer>

      <Link to="login">Voltar</Link>
    </Container>
  );
};

export default CreateAcount;
