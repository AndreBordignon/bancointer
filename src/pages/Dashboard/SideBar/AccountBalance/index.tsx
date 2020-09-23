import React, { useState, useMemo } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container, Balance } from './styles';
import Button from '../../../../components/Button';

const AccountBalance: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isValueVisible, setIsValueVisible] = useState(true);

  return (
    <Container>
      <Balance>
        <span>Saldo em Conta:</span>
        {isValueVisible ? (
          <>
            R$<strong>200,00</strong>
          </>
        ) : (
          <span />
        )}
      </Balance>
      <Button
        variant="transparent"
        onClick={() => setIsValueVisible((prevState) => !prevState)}
      >
        {isValueVisible ? <FiEye /> : <FiEyeOff />}
      </Button>
    </Container>
  );
};

export default AccountBalance;
