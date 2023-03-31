import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  PerformanceMonitor,
  Sky,
  SoftShadows,
} from "@react-three/drei";

import Lights from "./Lights";
import { Leva, useControls } from "leva";
import { Furniture } from "./Furniture";
import { Kitchen } from "./Kitchen";
import { Foundation } from "./Foundation";
import { LightsMeshes } from "./LightsMeshes";
import CameraControls from "./CameraControls";

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
    <Canvas
      dpr={[1, 1]}
      shadows camera={{ fov: 40 }}>
      <Leva hidden={true} />
      <PerformanceMonitor onDecline={() => set(true)} />
      {enabled && (
        <SoftShadows
          {...config}
          samples={bad ? Math.min(6, samples) : samples}
        />
      )}

      <CameraControls />
      <Suspense fallback={null}>
        <group position={[0, -3, 0]} rotation={[0, Math.PI * -0.5, 0]}>
          <Furniture />
          <Kitchen />
          <Foundation />
          <LightsMeshes lights={lights} />
        </group>
      </Suspense>

      <Sky sunPosition={[0, 10, 0]} />
      <Environment preset="city" />
      <Lights night={night} lights={lights} />
    </Canvas>
  );
};

export default Scene;
