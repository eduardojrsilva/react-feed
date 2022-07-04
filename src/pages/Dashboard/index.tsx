import Feed from '../../components/Feed';
import PageWrapper from '../../components/PageWrapper';
import Profile from '../../components/Profile';

import { USERS } from '../../utils/Mocks';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <PageWrapper>
      <Container>
        <Profile user={USERS[0]} />
        <Feed />
      </Container>
    </PageWrapper>
  );
};

export default Dashboard;
