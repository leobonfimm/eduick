import { useState } from 'react';
import { HeaderSignin } from './HeaderSignin';
import { HeaderDashboard } from './HeaderDashboard';

interface HeaderProps {
  handleOpenLoginModal: () => void;
}

export function Header({ handleOpenLoginModal }: HeaderProps) {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <>
      {!isLogged ? 
        <HeaderSignin handleOpenLoginModal={handleOpenLoginModal} />
        :
        <HeaderDashboard handleOpenLoginModal={handleOpenLoginModal} />
      }
    </>
  )
}