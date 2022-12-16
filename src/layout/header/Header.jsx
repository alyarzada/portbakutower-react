import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Settings } from "../sidebar/Settings";
import { setOpenedSidebar } from "../../app/Slicers/themes";
import { useTranslation } from "react-i18next";
import { Box, IconButton } from "@mui/material";

import LanguageSwitcher from "./LanguageSwitcher";
import MenuIcon from "@mui/icons-material/Menu";
import Notifications from "./Notifications";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";
import RestaurantCard from "./RestaurantCard";

const Header = ({ setOpenSubMenu }) => {
  const { openedSidebar, boxed, showCardIcon } = useSelector(
    (state) => state.themes
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <header
      className={`flex top-0 px-3 sm:px-5 transition-all ease-in-out duration-300 h-[70px] z-30 bg-bgLight drop-shadow-lg dark:bg-bgMain ${
        openedSidebar
          ? "left-0 md:left-[250px] header-width-open"
          : "left-0 md:left-[80px] header-width-close"
      } 
      } ${boxed ? "absolute" : "fixed"}`}
    >
      <nav className={`flex items-center w-full justify-between`}>
        <IconButton
          className="cursor-pointer text-bgSecond dark:text-text1"
          onClick={() => {
            dispatch(setOpenedSidebar());
            setOpenSubMenu(false);
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box className="flex items-center gap-x-1 sm:gap-x-5">
          <LanguageSwitcher />
          <Notifications />
          <Navigation />
          <Settings />
          {showCardIcon ? <RestaurantCard /> : null}
          <UserMenu />
        </Box>
      </nav>
    </header>
  );
};

export default Header;
