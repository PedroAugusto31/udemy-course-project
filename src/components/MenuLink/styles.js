import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.secondary};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0.8rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: ${theme.colors.mainColor};
      transition: all 200ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
