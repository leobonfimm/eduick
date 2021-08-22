import { AppProps } from 'next/app';

import '../styles/global.scss';
import { Header } from '../components/Header';
import { useState } from 'react';
import { LoginModal } from '../components/LoginModal';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  function handleOpenLoginModal() {
    setIsLoginModalOpen(true);
  }
  
  function handleCloseLoginModal() {
    setIsLoginModalOpen(false);
  }

  function handleIsLogin() {
    setIsLogin(true);
  }

  pageProps = {
    handleIsLogin,
    ...pageProps
  }

  return (
    <>
      <Header
        handleOpenLoginModal={handleOpenLoginModal}
        isLogin={isLogin}
      />
      
      <Component {...pageProps} />

      <LoginModal
        isOpen={isLoginModalOpen}
        onRequestClose={handleCloseLoginModal}
        handleIsLogin={handleIsLogin}
      />
    </>
  )
}

export default MyApp
