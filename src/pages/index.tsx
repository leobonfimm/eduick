import Head from 'next/head';
import { useLayoutEffect, useState } from 'react';
import { FaCheckCircle, FaCircle } from 'react-icons/fa'

import styles from './home.module.scss';

export default function Home() {
  const [isWideVersion, setIsWideVersion] = useState(false);
  const [isTeatcher, setIsTeatcher] = useState(true);

  useLayoutEffect(() => {
    function updateSize() {
      const { innerWidth } = window;
      setIsWideVersion(innerWidth > 660);
    }

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <Head>
        <title>Home | eduick</title>
      </Head>


      <div className={styles.container}>
        <main className={styles.mainContainer}>
          <img className={styles.imgGirl} src={isWideVersion ? "/images/detail.svg" : "/images/detail-mobile.svg"} alt="Girl writing" />

          <div className={styles.content}>
            <section className={styles.sectionContent}>
              <span>
                Find your<br />
                <strong>best teacher</strong>
              </span>

              {isWideVersion && (
                <p>
                  Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!
                </p>
              )}

              <input type="text" placeholder="Type here what are you looking for" />

              <div className={styles.containerActions}>
                <div className={styles.containerRadio}>
                  <button className={isTeatcher ? styles.buttonChecked : ''} onClick={() => setIsTeatcher(true)}>
                    {isTeatcher ? <FaCheckCircle /> : <FaCircle />}
                    <span>i’m a teacher</span>
                  </button>

                  <button className={!isTeatcher ? styles.buttonChecked : ''}  onClick={() => setIsTeatcher(false)}>
                    {!isTeatcher ? <FaCheckCircle /> : <FaCircle />}
                    <span>i’m a student</span>
                  </button>
                </div>

                <button>SEARCH</button>
              </div>
            </section>

            {isWideVersion && <img src="/images/detail-left.svg" alt="detail" />}
          </div>
        </main>

        <footer className={styles.footer}>

        </footer>
      </div>
    </>
  )
}
