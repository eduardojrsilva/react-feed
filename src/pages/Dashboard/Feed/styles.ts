import styled from 'styled-components';
import { convertPixelToRem, getScrollbarStyle } from 'css-blocks-styled-components';

import { theme } from '../../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  height: calc(100vh - ${convertPixelToRem(120)});
  overflow-y: auto;

  ${getScrollbarStyle({
    scrollColor: theme.colors.green500,
    backgroundColor: theme.colors.gray900,
  })}
`;
