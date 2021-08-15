import Head from 'next/head';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

export default function Dashboard() {
  const [isWideVersion, setIsWideVersion] = useState(false);

  useEffect(() => {
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
        <title>Dashboard | eduick</title>
      </Head>

      <div>
      </div>
    </>
  )
}
