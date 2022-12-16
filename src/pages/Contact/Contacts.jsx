import React, { useEffect } from "react";
import { Box, Typography, Stack, Breadcrumbs, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { contacts } from "./contactData";
import { useTranslation } from "react-i18next";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import Contact from "./Contact";
import { useScrollToUp } from "../../hooks/useScrollToUp";

const Contacts = () => {
  const { disableTransform } = useSelector((state) => state.themes);
  const { t } = useTranslation();
  useScrollToUp();

  return (
    <motion.div
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        className="mb-6"
      >
        <Box>
          <Typography
            className="dark:text-text1 text-textDark2"
            variant="h6"
            component="h1"
          >
            Əlaqə
          </Typography>
        </Box>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            className="text-logoColor"
            to="/"
          >
            <HomeIcon
              sx={{ mr: 0.5 }}
              className="text-logoColor align-middle"
              fontSize="inherit"
            />
            {t("anasehife")}
          </Link>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {t("elaqe")}
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {t("elaqe")}
          </Typography>
        </Breadcrumbs>
      </Stack>

      <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 exl:grid-cols-5 gap-3">
        {contacts.length > 0
          ? contacts.map((contact) => <Contact key={contact.id} {...contact} />)
          : null}
      </Box>
    </motion.div>
  );
};

export default Contacts;
