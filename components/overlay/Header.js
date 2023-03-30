import { motion } from "framer-motion";
import { useStore } from "../../store";
import styles from "../../styles/Header.module.css";

const Header = ({ night }) => {
  const { setCameraPosition, setCameraLookPosition, setMovement, movement } =
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
  };

  return (
    <motion.div
      animate={{
        x: movement === "start" ? 0 : -600,
      }}
      className={styles.header__wrapper}
    >
      <motion.h1
        className={styles.header}
        initial={{ opacity: 0 }}
        transition={{ delay: 1 }}
        animate={{ opacity: 1 }}
      >
        <span> DLP</span> Home
      </motion.h1>
      <div onClick={() => handleLights()} className={styles.header__card}>
        <motion.h2 style={{ zIndex: 2, marginLeft: 32 }}>Lights</motion.h2>
        <div className={styles.header__card__overlay} />
      </div>
    </motion.div>
  );
};

export default Header;
