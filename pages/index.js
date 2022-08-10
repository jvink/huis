import Head from "next/head";
import Header from "../components/Header";

import Home from "../components/Home";
import Scene from "../components/three/Scene";
import styles from "../styles/Index.module.css";

export default function Index(props) {
  const { lights, rooms } = props;

  return (
    <>
      <Head>
        <title>Huis</title>
        <meta name="description" content="Huis" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <Scene lights={lights} />
        <Header />
        {/* <div>
          <Home lights={lights} rooms={rooms} />
        </div> */}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const roomsResult = await fetch(
    `${process.env.HUE_BRIDGE_IP}${process.env.HUE_BASE_URL}room`,
    {
      headers: {
        "hue-application-key": process.env.HUE_APP_KEY,
      },
    }
  );
  const rooms = (await roomsResult.json()).data;

  const lightsResult = await fetch(
    `${process.env.HUE_BRIDGE_IP}${process.env.HUE_BASE_URL}light`,
    {
      headers: {
        "hue-application-key": process.env.HUE_APP_KEY,
      },
    }
  );
  const lights = (await lightsResult.json()).data;

  return {
    props: {
      lights,
      rooms,
    },
  };
}
