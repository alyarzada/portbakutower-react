import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Breadcrumbs, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CustomModal from "../../../components/UI/CustomModal";
import Calendar from "./Calendar";
import { Formik, Form } from "formik";
import CustomDatePicker from "../../../components/Form/CustomDatePicker";
import CustomTextField from "../../../components/Form/CustomTextField";
import CustomSelect from "../../../components/Form/CustomSelect";
import { useScrollToUp } from "../../../hooks/useScrollToUp";

const columns = [
  { field: "type", headerName: "Növ", width: 200 },
  { field: "title", headerName: "Başlıq", width: 700 },

  {
    field: "currentDate",
    headerName: "Yaradıldı",
    width: 200,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

//multiselect
const optionsProj = [
  { label: "Port Baku Residence", value: "portbaku" },
  { label: "Absheron Apartments", value: "absheron" },
  { label: "Bilgah Estate", value: "bilgah" },
  { label: "Crescent", value: "crescent" },
  { label: "Baku City Villas", value: "bakucity" },
  { label: "Expo Center", value: "expo" },
  { label: "Crescent", value: "crescent" },
];
const optionsPer = [
  { label: "Charles Scott", value: "charles" },
  { label: "Marie Ortez", value: "mary" },
  { label: "Travis Hammer", value: "travis" },
  { label: "Lisa Potts", value: "lisa" },
  { label: "Michael Orton", value: "michael" },
  { label: "Kevin McCallister", value: "kevin" },
  { label: "John Henderson", value: "john" },
];

const MeetingRoom = () => {
  const { t } = useTranslation();
  const { light } = useSelector((state) => state.themes);
  const { events } = useSelector((state) => state.events);
  const [openModal, setOpenModal] = useState(false);
  useScrollToUp();

  return (
    <Box>
      <Box className="flex justify-between">
        <h4 className="text-textDark2 dark:text-white  font-medium">
          {t("bildirisler")}
        </h4>
        <Box className="hidden lg:block">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={
                <NavigateNextIcon fontSize="small" className="text-[#C9B26D]" />
              }
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                key="1"
                to="/"
                className="text-[#C9B26D] "
              >
                Ana Səhifə
              </Link>
              <Typography
                underline="hover"
                key="2"
                className="text-[#aab8c5]"
                to="/notifications"
              >
                Bildirişlər
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>

      <Box>
        <Box className="my-4 rounded py-6 px-6 bg-bgLight drop-shadow-lg dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary w-full">
          <Box className="flex justify-end mb-6">
            <Button
              startIcon={<AddCircleOutlineOutlinedIcon />}
              className="capitalize"
              variant="contained"
              onClick={() => setOpenModal(true)}
            >
              Yeni bronlama
            </Button>
          </Box>

          <Box className="w-full mb-10" style={{ height: 400 }}>
            <DataGrid
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              rows={events}
              columns={columns}
            />
          </Box>

          <Calendar />
        </Box>
      </Box>

      {openModal ? (
        <CustomModal
          title="Yeni bronlama"
          handleClose={() => setOpenModal(false)}
        >
          <Box>
            <Formik
              initialValues={{
                reservationDate: "",
                reservationTime: "",
                meetingRoom: "",
                title: "",
                comment: "",
                guestName: [],
              }}
              onSubmit={(values) => console.log(values)}
            >
              {() => (
                <Form>
                  <CustomDatePicker
                    label="Bronlama vaxtı"
                    name="reservationDate"
                  />
                  <CustomSelect
                    label="Bronlama müddəti"
                    options={optionsProj}
                    name="reservationTime"
                  />
                  <CustomSelect
                    label="İclas otağı"
                    options={optionsProj}
                    name="reservationTime"
                  />
                  <CustomTextField label="Başlıq" name="title" />
                  <CustomTextField label="Şərhiniz" name="comments" multiline />
                  <CustomTextField label="Qonağın tam adı" name="guestName" />
                </Form>
              )}
            </Formik>
          </Box>
        </CustomModal>
      ) : null}
    </Box>
  );
};

export default MeetingRoom;
