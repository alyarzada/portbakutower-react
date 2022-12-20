import React from "react";
import { Formik, Form } from "formik";
import { Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import CustomSelect from "../../../components/Form/CustomSelect";
import CustomTextField from "../../../components/Form/CustomTextField";

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

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const CreateNewRequest = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="w-full p-6 rounded flex-1 text-textDark bg-bgLight  drop-shadow-lg hover:drop-shadow-xl dark:bg-bgMain dark:text-white"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, bounce: 0.4, type: "spring" }}
    >
      <Button className="mb-3 capitalize" variant="contained">
        {t("geri")}
      </Button>
      <Box>
        <Formik
          initialValues={{
            requestType: "",
            department: [],
            employersOfDepartment: [],
            title: "",
            request: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>
              <CustomSelect
                options={optionsPer}
                name="requestType"
                label="Müraciət növü"
              />
              <CustomSelect
                multiple
                options={optionsPer}
                name="department"
                label="Şöbə"
              />
              <CustomSelect
                multiple
                options={optionsProj}
                name="employersOfDepartment"
                label="Şöbənin əməkdaşları"
              />
              <CustomTextField name="title" label="Başlıq" />
              <CustomTextField multiline name="request" label="Müraciətiniz" />
              <Button variant="contained" className="capitalize" type="submit">
                Yarat
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </motion.div>
  );
};

export default CreateNewRequest;
