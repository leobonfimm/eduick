import Modal from 'react-modal';
import { FiX, FiEye, FiEyeOff } from 'react-icons/fi'

import styles from './styles.module.scss';
import { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function LoginModal({ isOpen, onRequestClose }: LoginModalProps) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modalContent}
    >
      <div className={styles.modalBody}>
        <div className={styles.headerModal}>
          <span>
            Get Started<br />
            <strong>Just Login</strong>
          </span>

          <button className={styles.buttonCloseModal} onClick={onRequestClose}>
            <FiX />
          </button>
        </div>

        <div className={styles.containerForm}>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" />

          <label htmlFor="password">Password:</label>
          <div className={styles.inputPassword}>
            <input id="password" type={!isShowPassword ? "password" : "text"} />

            <button>
              {!isShowPassword ? 
                <FiEye 
                  onClick={() => setIsShowPassword(!isShowPassword)} 
                />
                :
                <FiEyeOff 
                  onClick={() => setIsShowPassword(!isShowPassword)}
                />
              }
            </button>
          </div>

          <button>
            Login
          </button>
        </div>
      </div>
    </Modal>
  )
}