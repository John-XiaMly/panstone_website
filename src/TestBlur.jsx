import { motion } from "motion/react";

export default function TestBlur() {
  return (
    <motion.h1
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ fontSize: "32px" }}
    >
      Hello Mengjie
    </motion.h1>
  );
}
