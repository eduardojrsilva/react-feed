import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';
import { AuthProvider } from './Auth';
import { ToastProvider } from './Toast';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastProvider>
          <AuthProvider>{children}</AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
