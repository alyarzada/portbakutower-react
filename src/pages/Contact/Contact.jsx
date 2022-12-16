import React from "react";
import { Typography, Box, Avatar } from "@mui/material";

const Contact = ({ name, job, email }) => {
  return (
    <Box className="rounded px-3 py-6 dark:text-text1 bg-bgLight drop-shadow-lg hover:drop-shadow-xl flex flex-col justify-center items-center dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary">
      <Avatar className="w-28 h-28 border-4 border-slate-400 mb-3" />
      <Typography>{name}</Typography>
      <Typography className="text-sm mb-6 text-textmuted">{job}</Typography>
      <Typography className="text-[13px]">
        @ Email: <span className="ml-1 text-logoColor">{email}</span>
      </Typography>
    </Box>
  );
};

export default Contact;
