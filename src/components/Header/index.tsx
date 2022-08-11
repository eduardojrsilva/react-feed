import { useState } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../Avatar';

import { useAuth } from '../../providers/Auth';

import { Menu, MenuMobile, StyledHeader } from './styles';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { signOut, user } = useAuth();

  const handleMenuClick = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <h1>React Feed</h1>
        </Link>

        <button type="button" onClick={signOut}>
          Sair
        </button>

        <MenuMobile type="button" onClick={handleMenuClick}>
          <Avatar avatarUrl={user.avatar} menuMobile />
        </MenuMobile>

        {isMenuOpen && (
          <Menu>
            <Link to={`/profile/${user.id}`} onClick={handleMenuClick}>
              Meu Perfil
            </Link>
            <button type="button" onClick={signOut}>
              Sair
            </button>
          </Menu>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
