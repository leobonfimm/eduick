import styles from './headerDashboard.module.scss';
import { FiChevronDown, FiChevronUp, FiArrowRight } from 'react-icons/fi'
import { useState } from 'react';
import { useEffect } from 'react';

interface HeaderProps {
  handleOpenLoginModal: () => void;
}

export function HeaderDashboard({ handleOpenLoginModal }: HeaderProps) {
  const [isWideVersion, setIsWideVersion] = useState(false);
  const [isOpenDropdownMenu, setIsOpenDropdownMenu] = useState(false);

  useEffect(() => {
    function updateSize() {
      const { innerWidth } = window;
      setIsWideVersion(innerWidth > 730);
    }

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.headerDivLeft}>
          {isWideVersion && <img src="/images/group-points.svg" alt="eduick" />}
          <img className={styles.logoImg} src="/images/logo.svg" alt="eduick" />

          {isWideVersion && <a href="">My Classes</a>}
        </div>

        <div className={styles.headerDivRigth}>
          {isWideVersion ? (
            <button type="button">
              Change to teacher mode
            </button>
          ) : (
            <div
              className={styles.dropdownMenuButton}
              onClick={() => setIsOpenDropdownMenu(!isOpenDropdownMenu)}
            >
              {isOpenDropdownMenu ? <FiChevronUp /> : <FiChevronDown />}
            </div>
          )}

          <div className={styles.avatarContainer}>
            <img src="/images/avatar.svg" alt="avatar" />

            <div className={styles.notification} />
          </div>
        </div>
      </div>

      {isOpenDropdownMenu && 
        <div className={styles.dropdownMenuContainer}>
          <button type="button" className={styles.dropdownMenuContent}>
              <span>Change to teacher mode</span>
              <FiArrowRight />
          </button>
        </div>
      }
    </header>
  )
}