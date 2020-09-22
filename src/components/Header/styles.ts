import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  height: 10.4rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapped = styled.div`
  max-width: 100rem;
`;
