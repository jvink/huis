import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, softShadows, Stars, Stats } from "@react-three/drei";

import Lights from "./Lights";
import { House } from "./House";

softShadows();

const Scene = ({ lights }) => {
  return (
    <Canvas orthographic shadows camera={{ position: [50, 50, 100], zoom: 30 }}>
      <Suspense fallback={null}>
        <House position={[0, -3, 0]} rotation={[0, Math.PI * -0.5, 0]} />
      </Suspense>
      <Stats />
      <Lights lights={lights} />
      <Stars radius={50} count={10000} />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
