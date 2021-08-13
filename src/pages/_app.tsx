import { AppProps } from 'next/app';

import '../styles/global.scss';
import { Header } from '../components/Header';
import { useState } from 'react';
import { LoginModal } from '../components/Modal';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }
  
  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  return (
    <>
      <Header handleOpenLoginModal={handleOpenLoginModal} />
      <Component {...pageProps} />
      <LoginModal isOpen={isLoginModalOpen} onRequestClose={handleCloseLoginModal} />
    </>
  )
}

export default MyApp
