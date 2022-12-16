import React from "react";
import { Box, Button, Checkbox, Stack, FormControlLabel } from "@mui/material";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import CustomTextField from "../components/Form/CustomTextField";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../validations/login_validation";
import { motion } from "framer-motion";

const LoginWithUserName = () => {
  const navigate = useNavigate();
  const { light } = useSelector((state) => state.themes);

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <Formik
        initialValues={{ username: "", password: "", accept: false }}
        onSubmit={(values) => {
          navigate("/");
        }}
        validationSchema={LoginSchema}
      >
        {() => (
          <Form>
            <CustomTextField
              name="username"
              label="İstifadəçi adı və ya e-poçt ünvanı"
              variant="outlined"
            />
            <CustomTextField
              label="Şifrənizi daxil edin"
              type="password"
              name="password"
              variant="outlined"
            />
            <FormControlLabel
              control={<Checkbox name="accept" />}
              label="Yadda saxla"
              className="text-text1 select-none"
            />
            <Stack direction="row" justifyContent="center" className="my-3">
              <Button
                startIcon={<LoginIcon className="text-black" />}
                variant="contained"
                className="bg-logoColor text-black capitalize"
                type="submit"
              >
                Daxil olun
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default LoginWithUserName;
