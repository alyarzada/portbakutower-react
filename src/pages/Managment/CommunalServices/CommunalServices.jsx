import React from "react";
import { Grid, Box, Typography, Breadcrumbs, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { mockData } from "../../../data/data";
import { motion } from "framer-motion";
import CommunalServicesPanel from "../../ControlPanel/CommunalServicesPanel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CommunalServices = () => {
  const { disableTransform } = useSelector((state) => state.themes);
  const { t } = useTranslation();
  return (
    <div
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
      // initial={{ x: "50%" }}
      // animate={{ x: 0 }}
      // transition={{ duration: 0.4, bounce: 0.4, type: "spring" }}
    >
      <Box className="flex justify-between mb-6">
        <h4 className="text-textDark2 dark:text-white font-medium">
          {t("kommunalxidmetler")}
        </h4>
        <Box className="hidden lg:block">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={
                <NavigateNextIcon fontSize="small" className="text-[#C9B26D]" />
              }
              aria-label="breadcrumb"
            >
              <Link underline="hover" key="1" to="/" className="text-[#C9B26D]">
                Ana Səhifə
              </Link>
              <Typography
                underline="hover"
                key="2"
                className="text-[#aab8c5]"
                to="/notifications"
              >
                {t("kommunalxidmetler")}
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>

      <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5 exl:grid-cols-5 gap-4">
        {mockData.map((item) => (
          <CommunalServicesPanel key={item.id} {...item} />
        ))}
      </Box>
    </div>
  );
};

export default CommunalServices;
