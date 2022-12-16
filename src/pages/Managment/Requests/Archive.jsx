import React from "react";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const Archive = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="dark:bg-gradient-to-r bg-bgLight drop-shadow-lg dark:from-mainPrimary dark:to-mainSecondary text-text1 min-h-full rounded p-3"
    >
      Archive
    </motion.div>
  );
};

export default Archive;
