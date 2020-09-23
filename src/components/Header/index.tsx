import React from 'react';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import Button from '../Button';
import AccountDropDown from './AccountDropDown';
import { ReactComponent as BancoInter } from '../../assets/images/logo.svg';
import { User } from './Header';

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
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropDown user={user} />
        </RightNav>
      </Wrapper>
    </Container>
  );
};

export default Header;
