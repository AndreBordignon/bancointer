import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 6.4rem;
    background: linear-gradient(
      90deg,
      ${theme.colors.secondary} 0%,
      ${theme.colors.primary} 100%
    );
  `}
`;
