import React, { useState } from "react";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import { useField } from "formik";

const CustomDateTimePicker = ({ label, ...props }) => {
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));

  const [field, meta, helpers] = useField(props);

  const handleChange = (newValue) => {
    helpers.setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label={label}
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              "& .MuiInputBase-input": {
                height: "50px",
              },
            }}
          />
        )}
        {...props}
      />
    </LocalizationProvider>
  );
};

export default CustomDateTimePicker;
