import React from "react";
import { Box, Typography, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import portBakuImage from "../../assets/images/port-baku_image.jpg";
import portBakuAzerbaijan from "../../assets/images/port-baku_azerbaijan.jpg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box className="rounded mb-6">
        <Box>
          <img
            className="rounded-t"
            src={portBakuImage}
            alt="port-baku-image"
          />
        </Box>
        <Box className="relative rounded-b h-28 dark:bg-bgMain">
          <Box className="absolute -top-5 left-1 md:left-7">
            <img
              className="w-36 h-36 border-4 rounded-[50%]"
              src={portBakuAzerbaijan}
              alt="port-baku-azerbaijan"
            />
          </Box>
          <Box className="ml-[160px] md:ml-48  py-1 md:py-3">
            <Typography
              variant="h5"
              component="h1"
              className="font-semibold text-textDark4 dark:text-text1"
            >
              Port Baku
            </Typography>
            <Typography className="text-textDark2 dark:text-text1">
              Kompleksə daxil olan binaların sayı: 3
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        className="rounded mb-6 flex p-3 justify-end 
        dark:bg-bgMain"
      >
        <Breadcrumbs
          separator={
            <NavigateNextIcon fontSize="small" className="text-[#C9B26D]" />
          }
          aria-label="breadcrumb"
        >
          <Link to="/" underline="hover" key="1" className="text-[#C9B26D]">
            {t("anasehife")}
          </Link>
          <Typography key="2" className="text-textDark5 ">
            {t("komplekslovhesi")}
          </Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default Header;
