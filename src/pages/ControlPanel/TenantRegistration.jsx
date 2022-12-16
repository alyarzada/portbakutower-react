import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@mui/material";
import CustomTextField from "../../components/Form/CustomTextField";
import CustomFile from "../../components/Form/CustomFile";
import { motion } from "framer-motion";

const TenantRegistration = () => {
  return (
    <motion.div>
      <Box>Header</Box>

      <Box>
        <Formik
          initialValues={{
            dateRange: "",
            name: "",
            id: "",
            image: "",
            numbers: [],
            emails: [],
            comment: "",
          }}
          onSubmit={(values) => console.log(values)}
        >
          {() => (
            <Form>
              <CustomTextField name="dateRange" />
              <CustomTextField name="name" />
              <CustomFile name="id" />
              <CustomFile name="image" />
            </Form>
          )}
        </Formik>
      </Box>
    </motion.div>
  );
};

export default TenantRegistration;
