import { useProgress } from "@react-three/drei";
import React from "react";
import styles from "../../styles/Loader.module.css";
import { motion } from "framer-motion";
const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return (
    <motion.div
      style={{
        display: active ? "flex" : "none",
      }}
      animate={{ opacity: active ? 1 : 0 }}
      className={styles.loader__wrapper}
    >
      <div className={styles.loader__progress}>
        <div
          className={styles.loader__progress__bar}
          style={{ width: `${progress}%` }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
