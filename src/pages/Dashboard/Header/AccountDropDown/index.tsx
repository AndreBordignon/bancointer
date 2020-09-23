import React from 'react';
import { useTheme } from 'styled-components';

import { Container } from './styles';
import { User } from '../Header';

const removeHasFromColor = (color: string) => color.slice(1);

type AccountDropdownProps = {
  user: User;
};
const AccountDropDown: React.FC<AccountDropdownProps> = ({ user }) => {
  const { lightGrey, secondary } = useTheme().colors;
  return (
    <Container>
      <img
        src={`https://ui-avatars.com/api/?rounded=true&bold=true&format=svg&background=${removeHasFromColor(
          lightGrey,
        )}&color=${removeHasFromColor(secondary)}&name=${user.name}`}
        alt="user"
      />
    </Container>
  );
};

export default AccountDropDown;
