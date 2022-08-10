import { xyBriToRgb } from "../Light";

const Lights = ({ lights }) => {
  console.log(lights);

  const lightpositions = {
    "bd062eb7-b665-409d-a4d8-f7f37853d5d8": {
      position: [-1, 2.8, -5],
      name: "Tijdelijke lamp",
    },
    "933b40f7-8ca7-4e5e-9fbf-5994a6f641b1": {
      position: [-2, 1, 2.7],
      rotation: [0, Math.PI * 0, Math.PI * -0.5],
      name: "Hue lightstrip",
    },
    "8a51ba14-0c92-4068-9504-ee8280cb83fe": {
      position: [1.5, 2.8, -2.5],
      name: "Ronald",
    },
    "703a01e7-00c0-43c6-b1b9-a3884db0fcaa": {
      position: [3, 0, -5.5],
      name: "Bloom links",
      rotation: [Math.PI * 0.5, 0, 0],
    },
  };

  const rgbColorStringToHexColor = (rgb) => {
    const rgbArray = rgb.split(",");
    const r = parseInt(rgbArray[0].split("(")[1]);
    const g = parseInt(rgbArray[1]);
    const b = parseInt(rgbArray[2].split(")")[0]);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return (
    <group position={[0, -3, 0]}>
      <directionalLight
        castShadow
        intensity={5}
        position={[4, 10, -10]}
        color="#1e1e2b"
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
        <rectAreaLight
          position={lightpositions[light.id].position}
          rotation={lightpositions[light.id].rotation}
          height={0.5}
          width={0.5}
          intensity={40}
          color={rgbColorStringToHexColor(
            xyBriToRgb(light.color.xy.x, light.color.xy.y, 100)
          )}
        />
      ))}
    </group>
  );
};

export default Lights;
