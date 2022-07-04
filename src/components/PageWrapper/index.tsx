import Header from '../Header';

import { Wrapper } from './styles';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default PageWrapper;
