import React from "react";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const Information = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="dark:bg-bgMain bg-bgLight drop-shadow-lg text-text1 min-h-full rounded p-3"
    >
      Information
    </motion.div>
  );
};

export default Information;
