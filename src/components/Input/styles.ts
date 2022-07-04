import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Input = styled.input`
  width: 100%;
  background: ${theme.colors.gray900};
  color: ${theme.colors.gray300};
  padding: 10px;
  border: 0;
  outline: 0;
  border-radius: 5px;

  :focus {
    border: 1px solid ${theme.colors.green500};
  }
`;
