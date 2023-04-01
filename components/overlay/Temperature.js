import { Area, AreaChart } from 'recharts';
import { WiHumidity } from 'react-icons/wi'

import styles from '../../styles/Temperature.module.css';

const Temperature = ({ night, tempData = [] }) => {
    const currentData = tempData.length ? tempData[tempData.length - 1] : null;

    if (!currentData) return null;

    return (
        <div className={[styles.temperature, night ? styles.temperatureNight : styles.temperatureDay].join(' ')}>
            <div className={styles.temperatureInfo}>
                <span>
                    {currentData.temperature}<span className={styles.temperatureInfoCelcius}>°C</span>
                </span>
                <span className={styles.temperatureInfoHumidity}>
                    {currentData.humidity}<WiHumidity size={24} />
                </span>
            </div>
            <AreaChart width={274} height={60} data={tempData}>
                <defs>
                    <linearGradient id="colorTemperature" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={night ? "#144269" : "#1f97ff"} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={night ? "#144269" : "#1f97ff"} stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Area type="monotone" dataKey="temperature" strokeWidth={2} stroke={night ? "#367fbf" : "#367fbf"} fillOpacity={1} fill="url(#colorTemperature)" />
            </AreaChart>
        </div>
    )
}

export default Temperature