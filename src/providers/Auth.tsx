import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

import { useToast } from './Toast';

import api from '../services/api';

import { User } from '../model/User';

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<boolean>;
  signOut(): void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@ReactFeed:token');
    const user = localStorage.getItem('@ReactFeed:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const { addToast } = useToast();

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      let success = true;

      try {
        const response = await api.post('user/authenticate', {
          email,
          password,
        });

        const { token, user } = response.data;

        localStorage.setItem('@ReactFeed:token', token);
        localStorage.setItem('@ReactFeed:user', JSON.stringify(user));

        setData({ token, user });
      } catch (err) {
        addToast({
          title: 'Erro ao realizar login',
          description: 'Credenciais inválidas',
          type: 'error',
        });

        success = false;
      }

      return success;
    },
    [addToast],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@ReactFeed:token');
    localStorage.removeItem('@ReactFeed:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
