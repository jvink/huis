import { motion } from "framer-motion";

const Header = ({ night }) => {
  return (
    <div
      style={{
        lineHeight: "1",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
        zIndex: 5,
        color: night ? "hsl(240,16%,35%)" : "hsl(197,98%,90%)",
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
        <span> DLP</span> <br /> Lights
      </motion.h1>
    </div>
  );
};

export default Header;
