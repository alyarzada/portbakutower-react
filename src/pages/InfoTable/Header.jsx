import React from "react";
import { Box, Stack, Typography, Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <Box className="mb-6">
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Box>
          <Typography
            className="dark:text-text1 text-textDark2"
            variant="h6"
            component="h1"
          >
            {t("melumatmasasi")}
          </Typography>
        </Box>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            className="text-logoColor"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/"
          >
            <HomeIcon
              className="text-logoColor"
              sx={{ mr: 0.5 }}
              fontSize="inherit"
            />
            {t("anasehife")}
          </Link>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {t("melumatmasasi")}
          </Typography>
        </Breadcrumbs>
      </Stack>
    </Box>
  );
};

export default Header;
