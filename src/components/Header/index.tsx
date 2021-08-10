import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="eduick" />

        <nav>
          <a href="">How it works</a>
          <a href="">About Us</a>
        </nav>

        <button className={styles.buttonGetStarted}>Get Started</button>
      </div>
    </header>
  )
}