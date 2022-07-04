import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { FiLoader } from 'react-icons/fi';

import { Input } from '../../components/Input/styles';

import { useAuth } from '../../providers/Auth';

import { Container, FormContainer, LabelInputWrapper, SpaceComponent } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoaderOn, setIsLoaderOn] = useState(false);

  const { signIn } = useAuth();

  const handleLogin = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setIsLoaderOn(true);
      await signIn({ email, password });
      setIsLoaderOn(false);
    },
    [signIn, email, password],
  );

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <FormContainer onSubmit={handleLogin}>
        <h1>Login</h1>

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
          <label htmlFor="password">Senha</label>

          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="********"
          />
        </LabelInputWrapper>

        <button type="submit">
          <SpaceComponent />
          Entrar
          {isLoaderOn ? <FiLoader size={15} /> : <SpaceComponent />}
        </button>
      </FormContainer>
    </Container>
  );
};

export default Login;
