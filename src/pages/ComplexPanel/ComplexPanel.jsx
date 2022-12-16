import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import Header from "./Header";
import Body from "./Body";
import { useScrollToUp } from "../../hooks/useScrollToUp";

const ComplexPanel = () => {
  const { disableTransform } = useSelector((state) => state.themes);
  useScrollToUp();

  return (
    <motion.div
      className={`flex flex-col items-center w-full ${
        disableTransform ? "transform-none" : ""
      } `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Box className="w-full xl:w-[72%]">
        <Header />
        <Body />
      </Box>
    </motion.div>
  );
};

export default ComplexPanel;
