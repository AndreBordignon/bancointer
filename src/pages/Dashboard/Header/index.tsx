import React from 'react';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import Button from '../../../components/Button';
import AccountDropDown from './AccountDropDown';
import { ReactComponent as BancoInter } from '../../../assets/images/logo.svg';
import { User } from './Header';
import Gradient from './Gradient';

const Header: React.FC = () => {
  const user: User = { name: 'André Bordignon' };
  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav>
          <Button>Simulador Renda Fixa</Button>
          <AccountDropDown user={user} />
        </RightNav>
      </Wrapper>
      <Gradient />
    </Container>
  );
};

export default Header;
