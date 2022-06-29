import { StyledHeader } from './styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div>
        <h1>React Feed</h1>
        <button type="button">Sair</button>
      </div>
    </StyledHeader>
  );
};

export default Header;
