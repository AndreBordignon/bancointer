import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGrey};
    width: 100%;
    height: 7.2rem;
    padding: 1.6rem 0 1.6rem 2.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: ${theme.radius.small};
    color: ${theme.colors.grey};

    svg {
      stroke-width: 1.5px;
    }
  `}
`;

export const Balance = styled.div`
  ${({ theme }) => css`
    > span {
      display: block;
      width: 9.6rem;
      font-size: ${theme.fontSizes.small};
      :last-child {
        max-width: 7.6rem;
        height: 2.4rem;
        background: ${theme.colors.grey};
        border-radius: ${theme.radius.small};
      }
    }
    > strong {
      color: ${theme.colors.darkGrey};
      margin-left: 0.4rem;
    }
  `}
`;
