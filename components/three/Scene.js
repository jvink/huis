import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerformanceMonitor,
  SoftShadows,
  Stars,
  Stats,
} from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";

import Lights from "./Lights";
import { House } from "./House";
import { useControls } from "leva";
import { Furniture } from "./Furniture";
import { Kitchen } from "./Kitchen";

const Scene = ({ lights, night }) => {
  const [bad, set] = useState(false);
  const { enabled, samples, ...config } = useControls({
    debug: true,
    enabled: true,
    size: { value: 35, min: 0, max: 100, step: 0.1 },
    focus: { value: 0.5, min: 0, max: 2, step: 0.1 },
    samples: { value: 16, min: 1, max: 40, step: 1 },
  });

  return (
    <Canvas orthographic shadows camera={{ position: [50, 50, 100], zoom: 30 }}>
      <PerformanceMonitor onDecline={() => set(true)} />
      {enabled && (
        <SoftShadows
          {...config}
          samples={bad ? Math.min(6, samples) : samples}
        />
      )}

      <Suspense fallback={null}>
        <group position={[0, -3, 0]} rotation={[0, Math.PI * -0.5, 0]}>
          <House lights={lights} />
          <Furniture />
          <Kitchen />
        </group>
      </Suspense>
      {/* <Sky inclination={0.52} /> */}

      {!night && <Environment />}
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
