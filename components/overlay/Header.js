import { motion } from "framer-motion";
import { useStore } from "../../store";
import styles from "../../styles/Header.module.css";
import Temperature from "./Temperature";

const Header = ({ night, tempData }) => {
  const { setCameraPosition, setUIState, setCameraLookPosition, setMovement, movement } =
    useStore();

  const handleLights = () => {
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
    setUIState("lights");
  };

  return (
    <motion.div
      initial={{
        x: -600
      }}
      animate={{ x: 0 }}
      exit={{ x: -600 }}
      className={styles.header__wrapper}
    >
      <div className={styles.header__wrapper__list}>
        <motion.h1
          className={styles.header}
        >
          <span> DLP</span> Home
        </motion.h1>
        <div onClick={handleLights} className={styles.header__card}>
          <motion.h2 style={{ zIndex: 2, marginLeft: 32 }}>Lights</motion.h2>
          <div className={styles.header__card__overlay} />
        </div>
      </div>
      <Temperature night={night} tempData={tempData} />
    </motion.div>
  );
};

export default Header;
