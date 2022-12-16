import React from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import TabOne from "./Tabs/TabOne";
import TabTwo from "./Tabs/TabTwo";
import TabThree from "./Tabs/TabThree";
import TabFour from "./Tabs/TabFour";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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

const Body = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className="rounded p-1 lg:p-4 dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Mənzil-Tikinti Kooperativi" {...a11yProps(0)} />
          <Tab label="Kompleks" {...a11yProps(1)} />
          <Tab label="Bina" {...a11yProps(2)} />
          <Tab label="Mənzil" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TabOne />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabTwo />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabThree />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TabFour />
      </TabPanel>

      <Box className="rounded mb-6 dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary">
        <MapContainer
          center={[40.37665543757066, 49.85999537195368]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[500px] rounded"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            // icon={{
            //   options: {
            //     iconUrl: svg,
            //     iconRetinaUrl: svg,
            //     iconAnchor: null,
            //     popupAnchor: null,
            //     shadowUrl: null,
            //     shadowSize: null,
            //     shadowAnchor: null,
            //     // iconSize: new L.Point(60, 75),
            //     className: "leaflet-div-icon",
            //   },
            // }}
            position={[40.37665543757066, 49.85999537195368]}
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Box>
  );
};

export default Body;
