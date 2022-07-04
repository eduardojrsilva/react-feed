import { Link } from 'react-router-dom';

import Avatar from '../Avatar';

import { useAuth } from '../../providers/Auth';
import { USERS } from '../../utils/Mocks';

import { StyledHeader } from './styles';

const Header: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <h1>React Feed</h1>
        </Link>
        <button type="button" onClick={signOut}>
          Sair
        </button>
        <Avatar avatarUrl={USERS[0].avatarUrl} menuMobile />
      </div>
    </StyledHeader>
  );
};

export default Header;
