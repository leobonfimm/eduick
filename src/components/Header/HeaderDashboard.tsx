import styles from './headerDashboard.module.scss';
import { FiCircle, FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react';
import { useEffect } from 'react';

interface HeaderProps {
  handleOpenLoginModal: () => void;
}

export function HeaderDashboard({ handleOpenLoginModal }: HeaderProps) {
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
      </div>
    )
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerDivLeft}>
          <img src="/images/group-points.svg" alt="eduick" />
          <img className={styles.logoImg} src="/images/logo.svg" alt="eduick" />

          <a href="">My Classes</a>
        </div>

        <div className={styles.headerDivRigth}>
          <button type="button">
            Change to teacher mode
          </button>

          <div className={styles.avatarContainer}>
            <img src="/images/avatar.svg" alt="avatar" />

            <div className={styles.notification} />
          </div>
        </div>
      </div>
    </header>
  )
}