import styles from './headerSignin.module.scss';
import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react';
import { useEffect } from 'react';

interface HeaderProps {
  handleOpenLoginModal: () => void;
}

export function HeaderSignin({ handleOpenLoginModal }: HeaderProps) {
  const [isWideVersion, setIsWideVersion] = useState(false);
  const [isOpenToggleMenu, setIsOpenToggleMenu] = useState(false);

  useEffect(() => {
    function updateSize() {
      const { innerWidth } = window;
      setIsWideVersion(innerWidth > 660);
    }

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  function handleOpenLoginModalAndCloseToggleMenu() {
    setIsOpenToggleMenu(false)
    handleOpenLoginModal();
  }

  if (isOpenToggleMenu && !isWideVersion) {
    return (
      <div className={styles.menuToggle}>
        <div className={styles.menuToggleContainer}>
          <div className={styles.menuToggleHeader}>
            <img src="/images/logo.svg" alt="eduick" />

            <button onClick={() => setIsOpenToggleMenu(false)}>
              <FiX size={20} />
            </button>
          </div>

          <div className={styles.menuToggleSection}>
            <nav>
              <ul>
                <li>
                  <a href="">How it works</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <button
                    className={styles.buttonGetStarted}
                    onClick={handleOpenLoginModalAndCloseToggleMenu}
                  >
                    Get Started
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {!isWideVersion && (
          <button onClick={() => setIsOpenToggleMenu(true)}>
            <FiMenu size={30} />
          </button>
        )}
        <img src="/images/logo.svg" alt="eduick" />

        <div className={`${styles.menuSection}`}>
          {isWideVersion && (
            <nav>
              <ul>
                <li>
                  <a href="">How it works</a>
                </li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <button
                    className={styles.buttonGetStarted}
                    onClick={handleOpenLoginModal}
                  >
                    Get Started
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>


      </div>
    </header>
  )
}