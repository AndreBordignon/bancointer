import React from 'react';

import { FiBarChart2 } from 'react-icons/fi';

import { Container, AmountInvested } from './styles';
import AccountBalance from './AccountBalance';
import DropDown from './DropDown';
import navs from '../../../constants/sidenav';

const SideBar: React.FC = () => {
  return (
    <Container>
      <AccountBalance />
      <AmountInvested>
        Ver total investido
        <FiBarChart2 />
      </AmountInvested>
      {Object.entries(navs).map(([key, value]) => (
        <DropDown key={key} icon={value.icon} sectionName={key} />
      ))}
    </Container>
  );
};

export default SideBar;
