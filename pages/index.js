import Head from "next/head";
import Header from "../components/overlay/Header";
import { useControls } from "leva";
import { useEffect } from "react";

import Scene from "../components/three/Scene";
import styles from "../styles/Index.module.css";
import Loader from "../components/overlay/Loader";

export default function Index(props) {
  const { lights } = props;
  const { night } = useControls({
    night: false,
  });

  // useEffect(() => {
  //   document.getElementsByTagName("canvas")[0].style.background = night
  //     ? "linear-gradient(to bottom, #020111 60%, #20202c 100%)"
  //     : "linear-gradient(to bottom, #9be2fe 0%,#67d1fb 100%)";
  // }, [night]);

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
        <Loader />
        <Scene night={night} lights={lights} />
        <Header night={night} />
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

  // const lights = [
  //   {
  //     id: "bd062eb7-b665-409d-a4d8-f7f37853d5d8",
  //     color: { xy: { x: 0.5, y: 0.5 } },
  //     dimming: { brightness: 100 },
  //     on: { on: true },
  //   },
  //   {
  //     id: "933b40f7-8ca7-4e5e-9fbf-5994a6f641b1",
  //     color: { xy: { x: 0.25, y: 0.75 } },
  //     dimming: { brightness: 50 },
  //     on: { on: false },
  //   },
  //   {
  //     id: "8a51ba14-0c92-4068-9504-ee8280cb83fe",
  //     color: { xy: { x: 0.75, y: 0.25 } },
  //     dimming: { brightness: 75 },
  //     on: { on: true },
  //   },
  //   {
  //     id: "703a01e7-00c0-43c6-b1b9-a3884db0fcaa",
  //     color: { xy: { x: 0.75, y: 0.25 } },
  //     dimming: { brightness: 75 },
  //     on: { on: true },
  //   },
  // ];

  return {
    props: {
      lights,
      // rooms,
    },
  };
}
