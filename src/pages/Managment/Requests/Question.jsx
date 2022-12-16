import React from "react";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const Question = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary text-text1 min-h-full rounded p-3"
    >
      Question
    </motion.div>
  );
};

export default Question;
