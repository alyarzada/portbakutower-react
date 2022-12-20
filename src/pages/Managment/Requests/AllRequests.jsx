import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const AllRequests = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className=" bg-bgLight drop-shadow-lg dark:bg-bgMain text-text1 min-h-full rounded p-3"
    >
      AllRequests
    </motion.div>
  );
};

export default AllRequests;
