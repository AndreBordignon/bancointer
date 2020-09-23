import React from 'react';

import { Container } from './styles';

interface DropDownProps {
  icon: React.ReactNode;
  sectionName: string;
}

const DropDown: React.FC<DropDownProps> = ({ icon, sectionName }) => {
  return (
    <Container>
      <div>{icon}</div>
      <div>{sectionName}</div>
      <div>{'>'}</div>
    </Container>
  );
};

export default DropDown;
