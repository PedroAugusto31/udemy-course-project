import styled, { css } from "styled-components";

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
  `,
};

export const Title = styled.h1`
  ${({ theme, isLight, size }) => css`
    color: ${isLight ? theme.colors.blackTheme : theme.colors.mainColors};
    ${titleSize[size](theme)};
  `}
`;
