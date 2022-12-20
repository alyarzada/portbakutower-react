// Tunar
import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useMediaQuery, Box, Stack, Typography } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { getSidebarMenu } from "../../app/Slicers/menus";

import ios from "../../assets/images/logos/ios.png";
import android from "../../assets/images/logos/android.png";
import qrcode from "../../assets/images/logos/qrcode.png";

import logo from "../../assets/logo/4.png";
import logoSmall from "../../assets/logo/5.png";
import logoLightSmall from "../../assets/logo/6.png";
import logoLight from "../../assets/logo/7.png";

import { sideBarMenu, adminSidebarMenu } from "../../data/data";

const months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avqust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];

const SideBar = () => {
  const { openedSidebar, leftLight, light } = useSelector(
    (state) => state.themes
  );
  const { sidebarMenu } = useSelector((state) => state.menus);
  const { user } = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const matches = useMediaQuery("(max-width:768px)");
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))?.username === "admin123") {
      dispatch(getSidebarMenu(adminSidebarMenu));
    } else {
      dispatch(getSidebarMenu(sideBarMenu));
    }
  }, [user]);

  return (
    <motion.div
      className={`text-sm scroll-design z-[99999] select-none ${
        openedSidebar ? "overflow-auto" : "overflow-hidden md:overflow-visible"
      }   h-screen z-10 fixed left-0 top-[70px] md:top-0 ${
        leftLight === "light" ? "bg-bgLight drop-shadow-lg" : "bg-bgMain"
      }`}
      animate={
        matches
          ? { x: openedSidebar ? "0" : "-100%", width: "250px" }
          : { width: openedSidebar ? "250px" : "80px" }
      }
      transition={{ duration: 0.5 }}
    >
      <Box className="mb-6 mt-3 h-16" onClick={() => window.scrollTo(0, 0)}>
        <Link to="/">
          <img
            className={`mx-auto ${openedSidebar ? "w-20" : "w-12"}`}
            alt="logo"
            src={openedSidebar ? logoLight : logoLightSmall}
          />
        </Link>
      </Box>

      {openedSidebar ? (
        <Box className="mb-2">
          <Typography className="mx-auto mb-6 text-sm text-center text-text1">
            Bu gün, {new Date().getDate()} {months[new Date().getMonth()]}{" "}
            {new Date().getFullYear()}
          </Typography>
          <Typography className="px-8 text-text3 text-sm">
            Navigasiya
          </Typography>
        </Box>
      ) : null}

      <nav className="sidebar-nav">
        {sidebarMenu.map((sidebarItem, index) => {
          const Icon = sidebarItem.icon;
          return (
            <SidebarItem key={index} sidebarItem={sidebarItem} Icon={Icon} />
          );
        })}
      </nav>

      <Box className="px-3 mt-12">
        <Stack
          direction={openedSidebar ? "row" : "column"}
          justifyContent="space-between"
          alignItems="center"
          className="mb-8"
          spacing={1}
        >
          <img
            className={openedSidebar ? "w-24" : "w-14"}
            src={ios}
            alt="ios"
          />
          <img
            className={openedSidebar ? "w-24" : "w-14"}
            src={android}
            alt="android"
          />
        </Stack>
        <Box>
          <img
            className={openedSidebar ? "w-24 m-auto" : "w-10 m-auto"}
            src={qrcode}
            alt="qrcode"
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default SideBar;
