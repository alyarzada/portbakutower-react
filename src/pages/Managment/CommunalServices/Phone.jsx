import React from "react";
import { Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import azeurotel from "../../../assets/PhoneCategories/azeurot_logo.png";
import baktelecom from "../../../assets/PhoneCategories/aztelekombtrb.png";
import ultel from "../../../assets/PhoneCategories/ultel.png";
import catel from "../../../assets/PhoneCategories/catel.png";
import transeurocom from "../../../assets/PhoneCategories/transeurocom.png";

const phoneCategories = [
  {
    id: 1,
    title: "AzEuroTel",
    img: azeurotel,
    path: "",
  },
  {
    id: 2,
    title: "Baktelecom/Aztelekom",
    img: baktelecom,
    path: "",
  },
  {
    id: 3,
    title: "Catel",
    img: catel,
    path: "",
  },
  {
    id: 4,
    title: "transeurocom",
    img: transeurocom,
    path: "",
  },
  {
    id: 5,
    title: "Ultel",
    img: ultel,
    path: "",
  },
];

const Phone = ({ img, title }) => {
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

export default Phone;
