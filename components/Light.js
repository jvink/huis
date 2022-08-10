import ColorConverter from 'cie-rgb-color-converter';
import { useEffect, useState } from 'react';

import styles from '../styles/Light.module.css';

const getRGB = (x, y, brightness) => ColorConverter.xyBriToRgb(x, y, brightness);

export default function Light(props) {
    const { light } = props;
    const initialColorFromXy = getRGB(light.color.xy.x, light.color.xy.y, light.dimming.brightness);
    const initialColor = light.on.on ? `rgb(${initialColorFromXy.r}, ${initialColorFromXy.g}, ${initialColorFromXy.b})` : '#000000';
    const [color, setColor] = useState(initialColor);
    const POLL_INTERVAL = 1000 * 3; // 3 seconds
    const randomExtraTime = Math.floor(Math.random() * (500 - 50 + 1) + 50); // 50-500ms random extra time

    useEffect(() => {
        const interval = setInterval(() => {
            ; (async () => {
                console.log(`Fetching light state for light ${light.metadata.name}`);
                try {
                    const res = await fetch(`/api/light/${light.id}`);
                    const json = await res.json();
                    const newLight = json[0];
                    const newColor = getRGB(newLight.color.xy.x, newLight.color.xy.y, newLight.dimming.brightness);

                    return setColor(`rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`);
                } catch (error) { }
            })();
        }, POLL_INTERVAL + randomExtraTime);

        return () => clearTimeout(interval);
    }, []);

    return (
        <div className={styles.light} style={{ backgroundColor: color }} />
    );
}
