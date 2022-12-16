import { Typography, Stack, Box, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import React from "react";
import azerisiq from "../../../assets/communal/azerisiq.png";
import azerqaz from "../../../assets/communal/azeriqaz2.png";
import azersu from "../../../assets/communal/azersu.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { motion } from "framer-motion";

const Communal = () => {
  const { t } = useTranslation();
  const { disableTransform } = useSelector((state) => state.themes);
  return (
    <div
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
      // initial={{ x: "50%" }}
      // animate={{ x: 0 }}
      // transition={{ duration: 0.4, bounce: 0.4, type: "spring" }}
    >
      <Box className="flex justify-between mb-6">
        <h4 className="text-textDark dark:text-white font-medium">
          {t("bildirisler")}
        </h4>
        <Box className="hidden lg:block">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={
                <NavigateNextIcon fontSize="small" className="text-[#C9B26D]" />
              }
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                key="1"
                to="/"
                className="text-[#C9B26D] "
              >
                Ana Səhifə
              </Link>
              <Link
                underline="hover"
                key="1"
                to="/communalservices"
                className="text-[#C9B26D] "
              >
                Kommunal Xidmətlər
              </Link>
              <Typography
                underline="hover"
                key="2"
                className="text-[#aab8c5]"
                to="/notifications"
              >
                Bildirişlər
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>

      <Stack direction="row" spacing={3}>
        <Box className="flex items-center justify-center flex-col py-6 px-10 rounded bg-slate-50 gap-y-4">
          <img src={azerisiq} alt="azerisiq" />
          <Typography>Azərişıq</Typography>
        </Box>
        <Box className="flex items-center justify-center flex-col py-6 px-10 rounded bg-slate-50 gap-y-4">
          <img src={azerqaz} alt="azerqaz" />
          <Typography>Azərsu</Typography>
        </Box>
        <Box className="flex items-center justify-center flex-col py-6 px-10 rounded bg-slate-50 gap-y-4">
          <img src={azersu} alt="azersu" />
          <Typography>Azəriqaz</Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default Communal;
