import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Cloud,
  Environment,
  OrbitControls,
  PerformanceMonitor,
  Sky,
  SoftShadows,
  Stars,
  Stats,
} from "@react-three/drei";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";

import Lights from "./Lights";
import { House } from "./House";
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
    <Canvas shadows camera={{ fov: 40 }}>
      <fog attach="fog" args={["#010010", 20, 50]} />
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
          {/* <House lights={lights} /> */}
          <Furniture />
          <Kitchen />
          <Foundation />
          <LightsMeshes lights={lights} />
        </group>
      </Suspense>

      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -6, 0]} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[100, 100]} />
        <meshStandardMaterial attach="material" color="#f2f2f2" />
      </mesh> */}
      <Sky sunPosition={[0, 10, 0]} />
      <Environment preset="city" />
      {night && <Stars radius={50} count={10000} />}
      {/* <Effects /> */}
      <Lights night={night} lights={lights} />
      <Cloud
        position={[0, 15, 0]}
        opacity={0.5}
        speed={0.4} // Rotation speed
        width={10} // Width of the full cloud
        depth={1.5} // Z-dir depth
        segments={20} // Number of particles
      />
    </Canvas>
  );
};

const Effects = () => {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0.1}
        focalLength={0.02}
        bokehScale={3}
        height={480}
      />
    </EffectComposer>
  );
};

export default Scene;
