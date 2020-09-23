import styled, { css } from 'styled-components';

import Button from '../../../../components/Button';

export const Container = styled(Button)`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    font-size: ${theme.fontSizes.default};
    width: 100%;
    background: transparent;
    justify-content: flex-start;
    padding: 1.6rem 0;
    > div:first-child {
      width: 3.2rem;
      height: 3.2rem;
      background: ${theme.colors.lightGrey};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-right: ${theme.spacing.default};
    }
    > div:last-child {
      margin-left: auto;
    }
  `}
`;
