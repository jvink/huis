import { GrClose } from 'react-icons/gr'
import { motion } from 'framer-motion'

import styles from '../../styles/Light.module.css'
import { useStore } from '../../store'

const LightUI = () => {
    const { setUIState, setCameraPosition, setCameraLookPosition, setMovement } = useStore()
    return (
        <motion.div
        style={{x:'-50%'}}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            className={styles.light__wrapper}>
            <p>UI for changing Lights</p>
            <GrClose
                onClick={() => {
                    setCameraPosition({
                        x: 3,
                        y: 8,
                        z: 8,
                    });

                    setCameraLookPosition({
                        x: 0,
                        y: 0,
                        z: -1,
                    });
                    setMovement("free");
                    setUIState("lights")
                }}
            />
        </motion.div>
    )
}

export default LightUI