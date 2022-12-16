import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import LoginTabPanel from "./LoginTabPanel";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../assets/images/logo.png";
import LoginImage from "../assets/login_photo.jpg";
import androidIcon from "../assets/images/logos/android.png";
import iosIcon from "../assets/images/logos/ios.png";
import qrcodeIcon from "../assets/images/logos/qrcode.png";

const LoginPage = () => {
  const { light } = useSelector((state) => state.themes);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box className="flex h-screen overflow-hidden">
      <Box className="w-[450px] p-8">
        <Box className="w-full mb-10">
          <img className="w-40 mx-auto block" src={logo} alt="port-baku-logo" />
        </Box>
        <Typography className="text-text1 text-xl mb-4 text-center">
          Daxil olun
        </Typography>
        <LoginTabPanel />
        <Box className="flex justify-between items-center">
          <img className="w-1/4" src={androidIcon} alt="android" />
          <img className="w-1/4" src={qrcodeIcon} alt="qrcode" />
          <img className="w-1/4" src={iosIcon} alt="ios" />
        </Box>
        <Box></Box>
      </Box>
      <Box className="flex-1 h-full">
        <img
          className="w-full h-full object-cover object-top block"
          src={LoginImage}
          alt="port-baku-img"
        />
      </Box>
    </Box>
  );
};

export default LoginPage;
