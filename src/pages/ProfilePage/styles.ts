import { convertPixelToRem } from 'css-blocks-styled-components';
import styled from 'styled-components';
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
`;

export const UserPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: 1px solid ${theme.colors.gray600};

  > strong {
    display: block;
    margin-top: 30px;
    font-size: ${convertPixelToRem(20)};
  }
`;

export const Separator = styled.hr`
  border-top: thin;
  border-color: ${theme.colors.gray700};
`;
