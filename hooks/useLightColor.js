import { useEffect, useState } from "react";
import ColorConverter from "cie-rgb-color-converter";

export const getRGB = (x, y, brightness) =>
  ColorConverter.xyBriToRgb(x, y, brightness);

export const rgbColorStringToHexColor = ({ r, g, b }) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

export const useLightColor = (light) => {
  const initialColorFromXy = getRGB(
    light.color.xy.x,
    light.color.xy.y,
    light.dimming.brightness
  );
  const initialColor = light.on.on
    ? rgbColorStringToHexColor(initialColorFromXy)
    : "#000000";
  const [color, setColor] = useState(initialColor);
  const POLL_INTERVAL = 1000 * 3; // 3 seconds
  const randomExtraTime = Math.floor(Math.random() * (500 - 50 + 1) + 50); // 50-500ms random extra time

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     (async () => {
  //       try {
  //         const res = await fetch(`/api/light/${light.id}`);
  //         const json = await res.json();
  //         const newLight = json[0];
  //         const newColor = getRGB(
  //           newLight.color.xy.x,
  //           newLight.color.xy.y,
  //           newLight.dimming.brightness
  //         );

  //         setColor(
  //           newLight.on.on ? rgbColorStringToHexColor(newColor) : "#000000"
  //         );
  //       } catch (error) {}
  //     })();
  //   }, POLL_INTERVAL + randomExtraTime);

  //   return () => clearTimeout(interval);
  // }, []);

  return color;
};
