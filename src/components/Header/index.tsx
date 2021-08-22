import { useState } from 'react';
import { HeaderSignin } from './HeaderSignin';
import { HeaderDashboard } from './HeaderDashboard';

interface HeaderProps {
  handleOpenLoginModal: () => void;
  isLogin: boolean;
}

export function Header({ handleOpenLoginModal, isLogin }: HeaderProps) {
  return (
    <>
      {!isLogin ? 
        <HeaderSignin handleOpenLoginModal={handleOpenLoginModal} />
        :
        <HeaderDashboard handleOpenLoginModal={handleOpenLoginModal} />
      }
    </>
  )
}