import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  softShadows,
  Stars,
  Stats,
} from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";

import Lights from "./Lights";
import { House } from "./House";

softShadows();

const Scene = ({ lights, night }) => {
  return (
    <Canvas orthographic shadows camera={{ position: [50, 50, 100], zoom: 30 }}>
      <Suspense fallback={null}>
        <House
          lights={lights}
          position={[0, -3, 0]}
          rotation={[0, Math.PI * -0.5, 0]}
        />
      </Suspense>
      {!night && <Environment preset="city" />}
      {night && <Stars radius={50} count={10000} />}
      <Stats />
      <Effects />
      <Lights night={night} lights={lights} />
      <OrbitControls />
    </Canvas>
  );
};

const Effects = () => {
  return (
    <EffectComposer>
      {/* <Bloom
        intensity={1}
        luminanceThreshold={0.2}
        luminanceSmoothing={0}
        height={400}
      /> */}
    </EffectComposer>
  );
};

export default Scene;
