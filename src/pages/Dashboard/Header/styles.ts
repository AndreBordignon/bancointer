import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  height: 10.4rem;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  max-width: 100rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  > svg {
    cursor: pointer;
    max-width: 11.2rem;
    height: auto;
    margin: 0 1.4rem 1rem 0rem;
  }
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;
`;
export const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
