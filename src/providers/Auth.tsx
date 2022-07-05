import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { LOGINS, User, USERS } from '../utils/Mocks';
import { useToast } from './Toast';

interface AuthState {
  token: string;
  userId: number;
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

const fakeApiCall = async (email: string, password: string): Promise<AuthState> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      LOGINS.forEach((login, index) => {
        if (login.email === email) {
          if (login.password === password) {
            resolve({ token: 'FeedToken', userId: index });
          }
        }
      });

      reject();
    }, 2000),
  );

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@ReactFeed:token');
    const user = localStorage.getItem('@ReactFeed:user');

    const userId = Number(user);

    if (token && user) {
      return { token, userId };
    }

    return {} as AuthState;
  });

  const { addToast } = useToast();

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      let success = true;

      try {
        const { token, userId } = await fakeApiCall(email, password);

        localStorage.setItem('@ReactFeed:token', token);
        localStorage.setItem('@ReactFeed:user', String(userId));

        setData({ token, userId });
      } catch (err) {
        addToast({
          title: 'Login failed',
          description: 'Invalid credentials',
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
    <AuthContext.Provider value={{ user: USERS[data.userId], signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AutoProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
