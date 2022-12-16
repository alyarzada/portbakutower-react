import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import LoginWithPhoneNumber from "./LoginWithPhoneNumber";
import LoginWithUserName from "./LoginWithUserName";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LoginTabPanel = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#C9B26D",
              },
              "& .MuiButtonBase-root": {
                color: "#C9B26D",
              },
              "& .MuiButtonBase-root.Mui-selected": {
                color: "#C9B26D",
              },
            }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className="w-1/2 capitalize"
              label="İstifadəçi adı"
              {...a11yProps(0)}
            />
            <Tab
              className="w-1/2 capitalize"
              label="Nömrə ilə"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <LoginWithUserName />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LoginWithPhoneNumber />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default LoginTabPanel;
