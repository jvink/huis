import React, { useEffect } from "react";
import { PerspectiveCamera, useProgress } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import * as THREE from "three";
import { useStore } from "../../store";
const target = new THREE.Vector3(5, 0, 0);

const CameraControls = (props) => {
  const { loaded } = useProgress();

  const { camera } = useThree();
  const {
    cameraPosition,
    cameraLookPosition,
    setCameraPosition,
    setCameraLookPosition,
    movement,
  } = useStore();

  useEffect(() => {
    gsap.to(camera.position, {
      x: cameraPosition.x,
      y: cameraPosition.y,
      z: cameraPosition.z,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(target, {
      x: cameraLookPosition.x,
      y: cameraLookPosition.y,
      z: cameraLookPosition.z,
      duration: 1,
      ease: "power2.out",
    });
  }, [cameraPosition, cameraLookPosition]);

  useEffect(() => {
    if (!loaded) return;
    const timeout = setTimeout(() => {
      setCameraLookPosition({
        x: 5,
        y: 0,
        z: 1,
      });

      setCameraPosition({
        x: -5,
        y: 2,
        z: -12,
      });
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [loaded]);

  useFrame(({ mouse }) => {
    camera.lookAt(target);
    camera.updateProjectionMatrix();

    if (movement === "free") {
      camera.position.x += (mouse.x * 0.5 - camera.position.x + 3) * 0.05;
      camera.position.y += (-mouse.y * 0.5 - camera.position.y + 8) * 0.05;
    } else if (movement === "start") {
      camera.position.x += (mouse.x * 0.5 - camera.position.x + -5) * 0.05;
      camera.position.y += (-mouse.y * 0.5 - camera.position.y + 2) * 0.05;
    } else {
    }
  });

  return <PerspectiveCamera makeDefault position={[-5, 8, -13]} />;
};

export default CameraControls;
