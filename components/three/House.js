/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import { useLightColor } from "../../hooks/useLightColor";

const ease = [0.6, 0.05, -0.01, 0.9];

export function House(props) {
  const { lights } = props;
  const { nodes, materials } = useGLTF("/house.glb");
  const texture = useTexture("./WoodFlooringAshBrickBondEbonyDark001_flat.jpg");
  const colorTijdelijk = useLightColor(lights[0]);
  const colorLightStrip = useLightColor(lights[1]);
  const colorRonald = useLightColor(lights[2]);
  const colorBloom = useLightColor(lights[3]);

  console.log(lights);
  const material = new THREE.MeshPhysicalMaterial({
    roughness: 0.8,
    color: "#fff",
  });

  console.log("test");

  return (
    <motion.group
      {...props}
      transition={{ duration: 1.2, ease }}
      initial={{ y: -20 }}
      animate={{ y: -3 }}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.WoodFlooringAshBrickBondEbonyDark001_4K}
        position={[0, 0.02, 0]}
        scale={[0.5, 1, 0.5]}
      >
        <meshStandardMaterial attach="material" roughness={0.5} map={texture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.walls.geometry}
        material={material}
        position={[-6.9, 1.5, 0]}
        scale={[0.38, 0.5, 0.5]}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.block.geometry}
        material={material}
        position={[1.22, -0.99, 0]}
        scale={[8.22, 1, 8.22]}
      />
      <group position={[-3.7, 2.36, -2.34]} rotation={[-Math.PI, 1.57, 0]}>
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
        >
          <motion.meshBasicMaterial
            animate={{ color: colorRonald }}
            attach="material"
            roughness={0.5}
          />
        </mesh>
      </group>
      <group position={[-6.17, 1.42, -0.04]} rotation={[-Math.PI, 1.19, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials["Material.002"]}
        ></mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_1.geometry}
          material={materials.Material}
        >
          <motion.meshBasicMaterial
            animate={{ color: colorTijdelijk }}
            attach="material"
            roughness={0.5}
          />
        </mesh>
      </group>
      <group position={[-4.34, 2.79, -0.85]}>
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
        >
          <motion.meshBasicMaterial
            attach="material"
            roughness={0.5}
            animate={{ color: colorBloom }}
          />
        </mesh>
      </group>
    </motion.group>
  );
}

useGLTF.preload("/house.glb");
