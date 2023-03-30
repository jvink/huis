import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useStore } from "../../store";

export function LightsMeshes(props) {
  const { nodes, materials } = useGLTF("/lights.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-6.42, 0.05, -4.01]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002_1.geometry}
          material={materials["Material.002"]}
        />
        <Html>
          <Annotation img="/bloom.png" />
        </Html>
      </group>
      <group position={[-3.7, 2.36, -2.34]} rotation={[-Math.PI, 1.24, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_1.geometry}
          material={materials["Material.001"]}
        />
        <Html>
          <Annotation
            img="/ronald.png"
            cameraPosition={{
              x: 2.3,
              y: 0.5,
              z: -1.5,
            }}
            cameraLookPosition={{
              x: 2.3,
              y: -0.2,
              z: -3,
            }}
          />
        </Html>
      </group>
      <group position={[-6.17, 1.42, -0.04]} rotation={[-Math.PI, 1.19, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_1.geometry}
          material={materials.Material}
        />
        <Html>
          <Annotation img="/tijdelijk.png" />
        </Html>
      </group>
    </group>
  );
}

const Annotation = ({ img, cameraPosition, cameraLookPosition }) => {
  const { setCameraPosition, setCameraLookPosition, setMovement, movement } =
    useStore();
  return (
    <motion.div
      onClick={() => {
        setCameraPosition(cameraPosition);
        setCameraLookPosition(cameraLookPosition);
        setMovement("locked");
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        cursor: "pointer",
        width: "50px",
        height: "50px",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "5px",
        display: movement === "free" ? "flex" : "none",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      className="annotation"
    >
      <motion.img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
        src={img}
        alt="light"
      />
    </motion.div>
  );
};

useGLTF.preload("/lights.glb");
