import styled from 'styled-components';
import { convertPixelToRem, flex } from 'css-blocks-styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  background: ${theme.colors.gray800};
  border-radius: 8px;
`;

export const Wallpaper = styled.img`
  width: 100%;
  height: ${convertPixelToRem(200)};
  border-radius: 8px 8px 0 0;
  object-fit: cover;

  @media (max-width: 850px) {
    height: ${convertPixelToRem(160)};
  }

  @media (max-width: 450px) {
    height: ${convertPixelToRem(120)};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 90%;
  margin: 0 auto;
  color: ${theme.colors.gray100};

  > span {
    display: block;
    text-align: center;
    margin: 50px 0;
    color: ${theme.colors.gray400};
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    display: flex;
    align-items: center;
    background: ${theme.colors.green500};
    color: ${theme.colors.gray100};
    padding: 10px 20px;
    height: max-content;
    border-radius: 5px;
    border: 0;
    transition: background-color 0.2s;

    :hover {
      background: ${theme.colors.green300};
      color: ${theme.colors.white};
    }

    svg {
      margin-right: 10px;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const AvatarNameRoleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: -50px;

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: ${convertPixelToRem(24)};
      margin-top: 20px;
    }

    span {
      font-size: ${convertPixelToRem(16)};
      margin-top: 10px;
    }
  }

  @media (max-width: 850px) {
    margin-top: -60px;
    flex-direction: column;
    gap: 0;

    div {
      align-items: center;
    }
  }
`;

export const UserPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Separator = styled.hr`
  border-top: thin;
  border-color: ${theme.colors.gray700};
`;

export const Warning = styled.div`
  ${flex.middle};
  padding-top: ${convertPixelToRem(50)};
  color: ${theme.colors.gray100};
  font-size: ${convertPixelToRem(32)};
  font-weight: 700;
`;

export const StyledTime = styled.time`
  font-size: 14px;
  color: ${theme.colors.gray400};
`;
