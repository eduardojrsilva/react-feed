import Feed from '../../components/Feed';
import PageWrapper from '../../components/PageWrapper';
import Profile from '../../components/Profile';

import { useAuth } from '../../providers/Auth';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <PageWrapper>
      <Container>
        <Profile user={user} />
        <Feed />
      </Container>
    </PageWrapper>
  );
};

export default Dashboard;
