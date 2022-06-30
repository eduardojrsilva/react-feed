import Header from '../Header';
import { Space, Wrapper } from './styles';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Space />
    </>
  );
};

export default PageWrapper;
