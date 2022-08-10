import Head from 'next/head'
import { useEffect } from 'react';
import Home from '../components/Home'

import styles from '../styles/Index.module.css'

export default function Index(props) {
  const { lights, rooms } = props;

  useEffect(() => {
    ; (async () => {
      try {
        const res = await fetch('https://192.168.2.7/clip/v2/resource/light');
        const json = await res.json();

        console.log(1, json);
      } catch (error) {
        console.log(2, error);
      }
    })();
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Huis</title>
        <meta name="description" content="Huis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Huis</h1>
        <p className={styles.description}>Smart home dashboard</p>

        <div>
          <Home lights={lights} rooms={rooms} />
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const roomsResult = await fetch(`${process.env.HUE_BRIDGE_IP}${process.env.HUE_BASE_URL}room`, {
    headers: {
      'hue-application-key': process.env.HUE_APP_KEY,
    }
  });
  const rooms = (await roomsResult.json()).data;

  const lightsResult = await fetch(`${process.env.HUE_BRIDGE_IP}${process.env.HUE_BASE_URL}light`, {
    headers: {
      'hue-application-key': process.env.HUE_APP_KEY,
    }
  });
  const lights = (await lightsResult.json()).data;

  return {
    props: {
      lights,
      rooms,
    },
  };
}