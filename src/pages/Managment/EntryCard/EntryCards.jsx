import React, { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography, Stack, Breadcrumbs } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useScrollToUp } from "../../../hooks/useScrollToUp";

const columns = [
  { field: "title", headerName: "Başlıq", width: 200 },
  { field: "comment", headerName: "Ətraflı", width: 500 },

  { field: "dropdown", headerName: "Əməliyyat", width: 200, sortable: false },
  {
    field: "currentDate",
    headerName: "Yaradıldı",
    width: 200,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const EntryCards = () => {
  const { t } = useTranslation();
  const { disableTransform } = useSelector((state) => state.themes);
  const { events } = useSelector((state) => state.events);
  const navigate = useNavigate();
  useScrollToUp();

  return (
    <div
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
      // initial={{ x: "50%" }}
      // animate={{ x: 0 }}
      // transition={{ duration: 0.4, bounce: 0.4, type: "spring" }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
      >
        <h4 className="text-textDark2 dark:text-white  font-medium">
          {t("giriskartlari")}
        </h4>
        <Stack spacing={2}>
          <Breadcrumbs
            separator={
              <NavigateNextIcon fontSize="small" className="text-linkColor" />
            }
            aria-label="breadcrumb"
          >
            <Link underline="hover" key="1" to="/" className="text-[#727cf5] ">
              {t("anasehife")}
            </Link>
            <Typography
              underline="hover"
              key="2"
              className="text-[#aab8c5]"
              to="/notifications"
            >
              {t("giriskartlari")}
            </Typography>
          </Breadcrumbs>
        </Stack>
      </Stack>

      <Box className="my-4 rounded py-4 px-6 bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
        <Box className="flex flex-col mb-6 sm:flex-row justify-end gap-3 pt-6">
          <Button
            onClick={() => navigate("/user-card-request/access/create")}
            className="capitalize"
            variant="contained"
            startIcon={<AddCircleOutlineOutlinedIcon />}
          >
            Yeni giris karti
          </Button>
          <Button
            onClick={() => navigate("/user-card-request/parking/create")}
            className="capitalize"
            variant="contained"
            startIcon={<AddCircleOutlineOutlinedIcon />}
          >
            Yeni dayanacaq karti
          </Button>
        </Box>

        <Box style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={events}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>

        <Box
          className="flex justify-between items-center gap-x-1 
            bg-bgLight dark:bg-[#404954]
          py-5 px-3 sm:px-6 rounded mt-2"
        >
          <Link to="/">
            <Button
              startIcon={<ReplyIcon className="dark:text-white text-black" />}
              variant="contained"
              className="capitalize"
            >
              {t("geriqayit")}
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default EntryCards;
