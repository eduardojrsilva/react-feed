import { Link } from 'react-router-dom';

import Avatar from '../Avatar';

import { useAuth } from '../../providers/Auth';

import { StyledHeader } from './styles';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <h1>React Feed</h1>
        </Link>
        <button type="button" onClick={signOut}>
          Sair
        </button>
        <Avatar avatarUrl={user.avatarUrl} menuMobile />
      </div>
    </StyledHeader>
  );
};

export default Header;
