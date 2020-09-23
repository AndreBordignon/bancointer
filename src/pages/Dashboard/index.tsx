import React from 'react';

import { Container, Wrapper } from './styles';
import Header from './Header';
import SideBar from './SideBar';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <SideBar />
        </Wrapper>
      </Container>
    </>
  );
};

export default Dashboard;
