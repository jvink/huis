import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      style={{
        lineHeight: "1",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
        zIndex: 5,
        color: "hsl(240,16%,35%)",
        fontFamily: "satoshi",
        fontSize: "2rem",
        textAlign: "center",
        top: 0,
      }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        transition={{ delay: 1 }}
        animate={{ opacity: 1 }}
      >
        <span style={{ color: "hsl(240,16%,35%)" }}> DLP</span> <br /> Lights
      </motion.h1>
    </div>
  );
};

export default Header;
