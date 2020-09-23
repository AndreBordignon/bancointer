import styled, { css } from 'styled-components';

import { ButtonProps } from '.';

const variants = {
  secondary: css`
    background-color: transparent;
    border: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  `,
  transparent: css`
    background: transparent;
  `,
};
export const Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.8rem 2.4rem;
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.secondary}
    ${({ variant }) => variant && variants[variant]};
`;
