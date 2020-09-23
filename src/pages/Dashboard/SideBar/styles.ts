import styled, { css } from 'styled-components';

import Button from '../../../components/Button';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    max-width: 26.4rem;
    max-height: 60rem;
    width: 100%;
    height: 100%;
    border-radius: ${theme.radius.default};
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.08);
    padding: 2.4rem;
    & svg {
      stroke: ${theme.colors.primary};
    }
  `}
`;

export const AmountInvested = styled(Button)`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-size: ${theme.fontSizes.small};
    width: 100%;
    border-radius: ${theme.radius.small};
    justify-content: space-between;
    margin: 0.8rem 0;
    background: linear-gradient(
      90deg,
      ${theme.colors.secondary} 0%,
      ${theme.colors.primary} 100%
    );

    > svg {
      stroke-width: 2px;
      stroke: #fff;
    }
  `}
`;
