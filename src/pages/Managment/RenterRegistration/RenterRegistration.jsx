import React, { useEffect } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography, Stack, Breadcrumbs } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
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

const RenterRegistration = () => {
  const { t } = useTranslation();
  const { disableTransform } = useSelector((state) => state.themes);
  const { events } = useSelector((state) => state.events);
  useScrollToUp();

  return (
    <div
      className={`w-full ${disableTransform ? "transform-none" : ""} `}
      // initial={{ x: "50%" }}
      // animate={{ x: 0 }}
      // transition={{ duration: 0.4, bounce: 0.4, type: "spring" }}
    >
      <Box className="flex flex-col md:flex-row justify-between">
        <h4 className="text-textDark2 dark:text-white font-medium">
          {t("icareciqeydiyyati")}
        </h4>
        <Box>
          <Stack spacing={2}>
            <Breadcrumbs
              separator={
                <NavigateNextIcon fontSize="small" className="text-linkColor" />
              }
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                key="1"
                to="/"
                className="text-[#727cf5] "
              >
                {t("anasehife")}
              </Link>
              <Typography
                underline="hover"
                key="2"
                className="text-[#aab8c5]"
                to="/notifications"
              >
                {t("icareciqeydiyyati")}
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>

      {/* data-table */}
      <Box className="my-4 rounded bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
        <Box className="py-6 px-6" style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={events}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </Box>

        <Box className="flex justify-between items-center gap-x-1 bg-bgLight dark:bg-[#404954] py-5 px-3 sm:px-6 rounded mt-2">
          <Link to="/">
            <Button
              startIcon={<ReplyIcon className="text-white dark:text-black" />}
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

export default RenterRegistration;
