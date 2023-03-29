import { useRef } from "react";
import { motion } from "framer-motion-3d";
import { useHelper } from "@react-three/drei";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import { useControls } from "leva";
import { useLightColor } from "../../hooks/useLightColor";

const lightpositions = {
  "26b8c8a6-8b1e-43bb-a5f4-a46bd558afa7": {
    position: [3, 3, 5],
    rotation: [Math.PI * 0.5, Math.PI * 1, Math.PI * 1],
    name: "Kleine slaapkamer",
  },
  "bd062eb7-b665-409d-a4d8-f7f37853d5d8": {
    position: [-0.2, 1.8, -6.2],
    name: "Tijdelijke lamp",
    rotation: [Math.PI * -0.5, 0, 0],
  },
  "933b40f7-8ca7-4e5e-9fbf-5994a6f641b1": {
    position: [-2.5, 1, 2.7],
    rotation: [0, Math.PI * 0, Math.PI * -0.5],
    name: "Hue lightstrip",
  },
  "a254f642-06d9-4339-bb1a-6a2a7356760f": {
    position: [2.5, 1, -1],
    rotation: [Math.PI * 0.5, Math.PI * 1, Math.PI * 1],
    name: "Hue lightstrip bar",
  },
  "8a51ba14-0c92-4068-9504-ee8280cb83fe": {
    position: [2.3, 3, -3.6],
    name: "Ronald",
    rotation: [Math.PI * -0.5, 0, 0],
  },
  "703a01e7-00c0-43c6-b1b9-a3884db0fcaa": {
    position: [4, 0.1, -6.3],
    name: "Bloom links",
    rotation: [Math.PI * 0.5, 0, 0],
  },
};

const Lights = ({ lights, night }) => {
  return (
    <group position={[0, -3, 0]}>
      <directionalLight
        castShadow
        intensity={night ? 5 : 1}
        position={[4, 10, -10]}
        color={night ? "#1e1e2b" : "#f2f2f2"}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={30}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
        shadowBias={-0.001}
      />

      {lights.map((light) => (
        <Light light={light} />
      ))}
    </group>
  );
};

const Light = (props) => {
  const { light } = props;
  const { lightHelpers } = useControls({
    lightHelpers: false,
  });

  //helpers
  const rectAreaLight = useRef();
  useHelper(lightHelpers && rectAreaLight, RectAreaLightHelper, "#fff");
  const color = useLightColor(light);

  if (lightpositions[light.id] === undefined) return null;

  return (
    <motion.rectAreaLight
      ref={rectAreaLight}
      key={light.id}
      animate={{ color: color }}
      transition={{ duration: 1 }}
      position={lightpositions[light.id].position}
      rotation={lightpositions[light.id].rotation}
      height={0.5}
      color={color}
      width={0.5}
      intensity={40}
    />
  );
};

export default Lights;
