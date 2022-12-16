// Tunar
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SideBar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./styles/styles.css";
import { useScrollToUp } from "../hooks/useScrollToUp";

const Home = () => {
  const { openedSidebar } = useSelector((state) => state.themes);
  useScrollToUp();

  return (
    <Box>
      <Header />
      <SideBar />
      <Box
        className={`px-4 lg:px-8 pt-24 transition-all flex flex-col justify-between min-h-screen overflow-x-hidden ease-in-out dark:bg-bgSecond bg-[#FAFBFE] "
     ${
       openedSidebar
         ? "content-wrapper-width-open ml-0 md:ml-[250px]"
         : "content-wrapper-width-close ml-0 md:ml-[80px]"
     }`}
      >
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
