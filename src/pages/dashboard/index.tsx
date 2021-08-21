import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Rating, RatingView } from 'react-simple-star-rating';
import { FiStar } from 'react-icons/fi';

import styles from './styles.module.scss';

export default function Dashboard() {
  const [isWideVersion, setIsWideVersion] = useState(false);
  const [rating, setRating] = useState(3);

  useEffect(() => {
    function updateSize() {
      const { innerWidth } = window;
      setIsWideVersion(innerWidth > 660);
    }

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <>
      <Head>
        <title>Dashboard | eduick</title>
      </Head>

      <div className={styles.container}>
        <main className={styles.mainContainer}>
          <section className={styles.headerContent}>
            <div className={styles.containerShapes}>
              <div className={styles.shapeSmall} />
              <div className={styles.shapeLarge} />
            </div>

            <div className={styles.textContainer}>
              <h2>
                Hello <strong>Student<span>.</span></strong>
              </h2>

              <p>Whether you are a student trying to find your ideal private language teachers/tutors</p>
            </div>

            {isWideVersion &&
              <img
                className={styles.imgPeopleStuding}
                src="https://s3-alpha-sig.figma.com/img/08b7/d835/b6723b2541cbd7d418d59f9600a99da9?Expires=1630281600&Signature=NfRT3zQcBIYxcEPM1OQa20jtstKFcrXpclGzGv~IP5AVdKMNU~vBVmS2ogadheHFJsRbRLSxDaoX4RFdf8fCfoyCmSAnkeCkWZzDELXXlL~2guX8mMk2I11PpCHhB9pJKmADq-GcuekA-h1Qqmr5xcDBco9YKMaDBe3tdzEvZO~~UXDxKkJh8nZ02wxetDA7kTqXy9mz7m5cQ6EwWYjUfoMg-PI6gsNAz4IIhNNqwM7H6~0svBPNi5rOV3ZzIoQqUtxkpcLqHNvjBtLkEhV5aFMW6-7DUyCvBFnuKcufQh7cVDmBVdCZnJwm9aYMJNJ98f4O5fsLbBImUtZGoRdNhQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="People studing"
              />
            }
          </section>

          <div className={styles.containerLesson}>
            <div className={styles.contentLesson}>
              <img
                src="https://s3-alpha-sig.figma.com/img/b077/6fb7/cbbf6cbaf5f15aa394567935d5744c27?Expires=1630281600&Signature=GiFRbalxYUnl5p3FFbmfMivpavpy3Gti1YRSv0tPoXFQNFlbbmQS0RlTEB0M9Bydjq887btMTnE7kq-3gY7d2h~zlnS35~o9sTIa1wn5JooHVQdUF-H-yhb5WYdBYoFsMz9rjpOe6ho~o0EMhLaloqcRPOpEbEE8N~r4jCjiQBXy2dDgMEP~2NWRJlr2b0MbO9iXkcNKg2SRgQxno3M8R0KSKAEg3-6qo1lvfodjCQCh9dPvJiI~zSNjjLJ2YuwU-UbSn7099lHaizza7kyNq2ACfk-cVhQSQkbxTbOL-cCj45uv8sp9bT6SqfKLK8XJxZpe0X0yKQrumFlOQPiyEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
              />

              <div className={styles.containerRating}>
                <Rating onClick={handleRating} ratingValue={rating} />

                <div className={styles.containerQtdLessons}>
                  10 LESSONS
                </div>

              </div>

              <h2 className={styles.titleLesson}>Master English: Improve Your Speaking</h2>
            </div>

            <div className={styles.contentLesson}>
              <img
                src="https://s3-alpha-sig.figma.com/img/b077/6fb7/cbbf6cbaf5f15aa394567935d5744c27?Expires=1630281600&Signature=GiFRbalxYUnl5p3FFbmfMivpavpy3Gti1YRSv0tPoXFQNFlbbmQS0RlTEB0M9Bydjq887btMTnE7kq-3gY7d2h~zlnS35~o9sTIa1wn5JooHVQdUF-H-yhb5WYdBYoFsMz9rjpOe6ho~o0EMhLaloqcRPOpEbEE8N~r4jCjiQBXy2dDgMEP~2NWRJlr2b0MbO9iXkcNKg2SRgQxno3M8R0KSKAEg3-6qo1lvfodjCQCh9dPvJiI~zSNjjLJ2YuwU-UbSn7099lHaizza7kyNq2ACfk-cVhQSQkbxTbOL-cCj45uv8sp9bT6SqfKLK8XJxZpe0X0yKQrumFlOQPiyEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
              />

              <div className={styles.containerRating}>
                <Rating onClick={handleRating} ratingValue={rating} />

                <div className={styles.containerQtdLessons}>
                  10 LESSONS
                </div>

              </div>

              <h2 className={styles.titleLesson}>Master English: Improve Your Speaking</h2>
            </div>

            <div className={styles.contentLesson}>
              <img
                src="https://s3-alpha-sig.figma.com/img/b077/6fb7/cbbf6cbaf5f15aa394567935d5744c27?Expires=1630281600&Signature=GiFRbalxYUnl5p3FFbmfMivpavpy3Gti1YRSv0tPoXFQNFlbbmQS0RlTEB0M9Bydjq887btMTnE7kq-3gY7d2h~zlnS35~o9sTIa1wn5JooHVQdUF-H-yhb5WYdBYoFsMz9rjpOe6ho~o0EMhLaloqcRPOpEbEE8N~r4jCjiQBXy2dDgMEP~2NWRJlr2b0MbO9iXkcNKg2SRgQxno3M8R0KSKAEg3-6qo1lvfodjCQCh9dPvJiI~zSNjjLJ2YuwU-UbSn7099lHaizza7kyNq2ACfk-cVhQSQkbxTbOL-cCj45uv8sp9bT6SqfKLK8XJxZpe0X0yKQrumFlOQPiyEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
              />

              <div className={styles.containerRating}>
                <Rating onClick={handleRating} ratingValue={rating} />

                <div className={styles.containerQtdLessons}>
                  10 LESSONS
                </div>

              </div>

              <h2 className={styles.titleLesson}>Master English: Improve Your Speaking</h2>
            </div>

            <div className={styles.contentLesson}>
              <img
                src="https://s3-alpha-sig.figma.com/img/b077/6fb7/cbbf6cbaf5f15aa394567935d5744c27?Expires=1630281600&Signature=GiFRbalxYUnl5p3FFbmfMivpavpy3Gti1YRSv0tPoXFQNFlbbmQS0RlTEB0M9Bydjq887btMTnE7kq-3gY7d2h~zlnS35~o9sTIa1wn5JooHVQdUF-H-yhb5WYdBYoFsMz9rjpOe6ho~o0EMhLaloqcRPOpEbEE8N~r4jCjiQBXy2dDgMEP~2NWRJlr2b0MbO9iXkcNKg2SRgQxno3M8R0KSKAEg3-6qo1lvfodjCQCh9dPvJiI~zSNjjLJ2YuwU-UbSn7099lHaizza7kyNq2ACfk-cVhQSQkbxTbOL-cCj45uv8sp9bT6SqfKLK8XJxZpe0X0yKQrumFlOQPiyEA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
              />

              <div className={styles.containerRating}>
                <Rating onClick={handleRating} ratingValue={rating} />

                <div className={styles.containerQtdLessons}>
                  10 LESSONS
                </div>

              </div>

              <h2 className={styles.titleLesson}>Master English: Improve Your Speaking</h2>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <span>
            Copyright © 2020 <strong>Eduick.</strong>
          </span>
        </footer>
      </div>
    </>
  )
}
