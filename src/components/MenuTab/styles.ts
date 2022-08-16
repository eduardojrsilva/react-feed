import styled, { css } from 'styled-components';

interface MenuItemProps {
  $isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  gap: 4px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray700};
`;

export const MenuItem = styled.div<MenuItemProps>`
  padding: 10px;
  border-radius: 10px 10px 0 0;
  border: 1px solid transparent;
  border-bottom: none;
  text-align: center;
  cursor: pointer;

  ${({ $isActive, theme }) =>
    $isActive
      ? css`
          border-color: ${theme.colors.green300};
          background: ${theme.colors.gray700};
        `
      : css`
          background: ${theme.colors.gray900};
          color: ${theme.colors.gray100};

          :hover {
            background-color: ${theme.colors.gray700};
            transition: background-color 0.3s;
          }
        `}
`;
