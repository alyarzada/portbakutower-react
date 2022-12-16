import react from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Header from "./Header";
import Body from "./Body";

const InfoTable = () => {
  const { disableTransform } = useSelector((state) => state.themes);
  return (
    <motion.div
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Header />
      <Body />
    </motion.div>
  );
};

export default InfoTable;
