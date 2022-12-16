import React from "react";
import { Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import bbtv from "../../../assets/communal/bbtv.png";

const phoneCategories = [
  {
    id: 1,
    title: "B&B TV",
    img: bbtv,
    path: "",
  },
];

const Tv = () => {
  const { disableTransform } = useSelector((state) => state.themes);

  return (
    <div
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
      // initial={{ x: "50%" }}
      // animate={{ x: 0 }}
      // transition={{ duration: 0.4, bounce: 0.4, type: "spring" }}
    >
      <Grid container gap={2}>
        {phoneCategories.map(({ img, title }) => (
          <Grid
            xs={3}
            item
            className="rounded cursor-pointer bg-slate-50 px-6 py-12  flex items-center justify-center flex-col group"
          >
            <img
              src={img}
              alt={title}
              className="w-1/2 mb-6 transition-transform duration-300 group-hover:-translate-y-2"
            />
            <Typography>{title}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Tv;
