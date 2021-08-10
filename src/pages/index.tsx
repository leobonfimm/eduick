import Head from 'next/head';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | eduick</title>
      </Head>

      <main className={styles.container}>
        <img className={styles.imgGirl} src="/images/detail.svg" alt="Girl writing" />

        <div className={styles.content}>
          <section className={styles.sectionContent}>
            <span>
              Find your<br/>
              <strong>best teacher</strong>
            </span>

            <p>
              Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to find great students for your customised private lessons!
            </p>

            <input type="text" placeholder="Type here what are you looking for" />

            <div className={styles.containerActions}>
              <div className={styles.containerRadio}>
                <div className={styles.radio}>
                  <input type="radio" name="teacher" id="teacher" checked/>
                  <label htmlFor="teacher">i’m a teacher</label>
                </div>

                <div className={styles.radio}>
                  <input type="radio" name="student" id="student" />
                  <label htmlFor="student">i’m a student</label>
                </div>
              </div>

              <button>SEARCH</button>
            </div>
          </section>
          
          <img src="/images/detail-left.svg" alt="detail" />
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </>
  )
}
