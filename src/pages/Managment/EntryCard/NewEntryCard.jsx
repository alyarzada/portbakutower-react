import React from "react";
import CustomSelect from "../../../components/Form/CustomSelect";
import { Box, Stack, Typography, Breadcrumbs, Button } from "@mui/material";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import CustomTextField from "../../../components/Form/CustomTextField";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useTranslation } from "react-i18next";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { motion } from "framer-motion";

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

const NewEntryCard = () => {
  const { t } = useTranslation();

  return (
    <div
      // initial={{ x: "50%" }}
      // animate={{ x: 0 }}
      // transition={{ duration: 0.4, bounce: 0.4, type: "spring" }}
    >
      <Box className="flex justify-between mb-6">
        <h4 className="text-textDark2 dark:text-white font-medium">
          {t("giriskarti")}
        </h4>
        <Box className="hidden lg:block">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={
                <NavigateNextIcon fontSize="small" className="text-logoColor" />
              }
              aria-label="breadcrumb"
            >
              <Link underline="hover" key="1" to="/" className="text-logoColor">
                Ana Səhifə
              </Link>
              <Link underline="hover" key="1" to="/" className="text-logoColor">
                Giris kartlari
              </Link>
              <Link underline="hover" key="1" to="/" className="text-logoColor">
                Giris karti
              </Link>
              <Typography underline="hover" key="2" className="text-[#aab8c5]">
                Yenisini yaradin
              </Typography>
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>

      <Box className="dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary">
        <Formik
          initialValues={{
            request: "",
            newCard: "",
            amount: "",
            comment: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <Box className="p-6">
                <CustomTextField readOnly label="Muraciet" name="request" />
                <CustomSelect
                  name="newCard"
                  options={optionsProj}
                  label="Yeni kart"
                />
                <CustomTextField name="amount" label="Sayi" />
                <CustomTextField name="comment" label="Serhiniz" />
              </Box>
              <Stack
                className="bg-slate-600 px-6 py-4"
                direction="row"
                justifyContent="space-between"
              >
                <Button startIcon={<ReplyOutlinedIcon />} variant="contained">
                  {t("geri")}
                </Button>
                <Button startIcon={<TaskAltOutlinedIcon />} variant="contained">
                  {t("yarat")}
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default NewEntryCard;
