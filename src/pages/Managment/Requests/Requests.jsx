import React, { useState } from "react";
import {
  Box,
  Stack,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const requestPanels = [
  {
    id: 1,
    title: "hamisi",
    icon: DraftsOutlinedIcon,
    path: "/requests",
  },
  {
    id: 2,
    title: "sual",
    icon: HelpOutlineOutlinedIcon,
    path: "/requests/question",
  },
  {
    id: 3,
    title: "teklif",
    icon: AssistantOutlinedIcon,
    path: "/requests/suggestion",
  },
  {
    id: 4,
    title: "sikayet",
    icon: ReportProblemOutlinedIcon,
    path: "/requests/compliant",
  },
  {
    id: 5,
    title: "melumat",
    icon: InfoOutlinedIcon,
    path: "/requests/information",
  },
  {
    id: 6,
    title: "cagri",
    icon: ReportProblemOutlinedIcon,
    path: "/requests/request",
  },
  {
    id: 7,
    title: "arxiv",
    icon: Inventory2OutlinedIcon,
    path: "/requests/archive",
  },
];

const Requests = () => {
  const { disableTransform } = useSelector((state) => state.themes);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [active, setActive] = useState(1);

  return (
    <div
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
      // initial={{ x: "50%" }}
      // animate={{ x: 0 }}
      // transition={{ duration: 0.4, bounce: 0.4, type: "spring" }}
    >
      <Stack direction={{ xs: "column-reverse", lg: "row" }} spacing={2}>
        <Box
          className="w-full lg:w-[24%] rounded p-6 text-textDark bg-bgLight  drop-shadow-lg hover:drop-shadow-xl 
              dark:bg-bgMain dark:text-white"
        >
          <Button
            startIcon={<AddCircleOutlineOutlinedIcon />}
            className="w-full capitalize"
            variant="contained"
            onClick={() => navigate("/requests/createnewrequest")}
          >
            Yeni muraciet
          </Button>
          <List>
            {requestPanels.map((panel) => {
              const Icon = panel.icon;
              return (
                <ListItem key={panel.id} className="p-0">
                  <ListItemButton
                    className={`rounded ${
                      active === panel.id ? "bg-[#ffffff14]" : ""
                    }`}
                    onClick={() => {
                      setActive(panel.id);
                      navigate(panel.path);
                    }}
                  >
                    <Icon>{panel.icon}</Icon>
                    <ListItemText className="ml-3" primary={t(panel.title)} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box className="flex-1">
          <Outlet />
        </Box>
      </Stack>
    </div>
  );
};

export default Requests;
