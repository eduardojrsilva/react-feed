import { Link } from 'react-router-dom';
import { StyledHeader } from './styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <h1>React Feed</h1>
        </Link>
        <button type="button">Sair</button>
      </div>
    </StyledHeader>
  );
};

export default Header;
