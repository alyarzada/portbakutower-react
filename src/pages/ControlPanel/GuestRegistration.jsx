import React from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { Formik, Form, FieldArray } from "formik";
import { nanoid } from "@reduxjs/toolkit";
import CustomDateTimePicker from "../../components/Form/CustomDateTimePicker";
import CustomTextField from "../../components/Form/CustomTextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { validation } from "../../validations/GuestsRegistrationValidation";

const initialValues = {
  date: "",
  names: [{ id: nanoid(), title: "" }],
  phones: [{ id: nanoid(), title: "" }],
  emails: [{ id: nanoid(), title: "" }],
};

const GuestRegistration = () => {
  const submitHandler = (values) => {
    console.log(values);
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={validation}
      >
        {({ values }) => (
          <Form>
            <CustomDateTimePicker name="date" className="mb-6" />
            <FieldArray
              name="names"
              render={({ insert, remove, push }) => (
                <Box>
                  {values.names.map((name, index) => (
                    <Stack key={index} direction="row" alignItems="center">
                      <CustomTextField
                        label="Name"
                        name={`names.${index}.title`}
                      />
                      {index === 0 && (
                        <IconButton
                          onClick={() => push({ id: nanoid(), title: "" })}
                        >
                          <AddCircleOutlineIcon />
                        </IconButton>
                      )}
                      {index !== 0 && (
                        <IconButton onClick={() => remove(index)}>
                          <RemoveCircleOutlineIcon />
                        </IconButton>
                      )}
                    </Stack>
                  ))}
                </Box>
              )}
            />

            <FieldArray
              name="phones"
              render={({ insert, remove, push }) => (
                <Box>
                  {values.phones.map((phone, index) => (
                    <Stack key={index} direction="row" alignItems="center">
                      <CustomTextField
                        label="Phone Number"
                        name={`phones.${index}.title`}
                      />
                      {index === 0 && (
                        <IconButton
                          onClick={() => push({ id: nanoid(), title: "" })}
                        >
                          <AddCircleOutlineIcon />
                        </IconButton>
                      )}
                      {index !== 0 && (
                        <IconButton onClick={() => remove(index)}>
                          <RemoveCircleOutlineIcon />
                        </IconButton>
                      )}
                    </Stack>
                  ))}
                </Box>
              )}
            />
            <FieldArray
              name="emails"
              render={({ insert, remove, push }) => (
                <Box>
                  {values.emails.map((email, index) => (
                    <Stack key={index} direction="row" alignItems="center">
                      <CustomTextField
                        label="Email"
                        name={`emails.${index}.title`}
                      />
                      {index === 0 && (
                        <IconButton
                          onClick={() => push({ id: nanoid(), title: "" })}
                        >
                          <AddCircleOutlineIcon />
                        </IconButton>
                      )}
                      {index !== 0 && (
                        <IconButton onClick={() => remove(index)}>
                          <RemoveCircleOutlineIcon />
                        </IconButton>
                      )}
                    </Stack>
                  ))}
                </Box>
              )}
            />
            <Box className="flex justify-end">
              <Button variant="contained" className="capitalize" type="submit">
                Yarat
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default GuestRegistration;
