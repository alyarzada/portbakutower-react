import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Tab } from "@mui/material";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import MyDetails from "./MyDetails";
import MyPassword from "./MyPassword";

const ProfileForm = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              sx={{ minWidth: "50%" }}
              className="text-text3"
              label="Mənim detallarım"
              value="1"
            />
            <Tab
              sx={{ minWidth: "50%" }}
              className="text-text3"
              label="Şifrəm"
              value="2"
            />
          </TabList>
        </Box>

        <TabPanel value="1" className="p-0 mt-5">
          <MyDetails />
        </TabPanel>
        <TabPanel value="2" className="p-0 mt-5">
          <MyPassword />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ProfileForm;
