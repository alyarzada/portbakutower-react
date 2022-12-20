import React, { useState, useRef } from "react";
import {
  Box,
  Stack,
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  IconButton,
  Typography,
  MenuItem,
  Divider,
} from "@mui/material";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { setOpenedSettingBar } from "../../app/Slicers/themes";
import CustomMenu from "../../components/UI/CustomMenu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SaveIcon from "@mui/icons-material/Save";
import TelegramIcon from "@mui/icons-material/Telegram";
import CustomModal from "../../components/UI/CustomModal";
import portBakuImg from "../../assets/port-baku-residence_16406207114647.jpg";

const lists = [
  {
    id: 1,
    title: "Xəbər lenti",
    path: "/complexpanel",
  },
  {
    id: 2,
    title: "Yadda saxlanılan postlar",
    path: "/complexpanel/savedposts",
  },
  {
    id: 3,
    title: "Yazışma",
    path: "/chat",
  },
];

const modalList = [
  {
    id: 1,
    title: "Mənzil-Tikinti Kooperativi",
    name: "PORT BAKU",
  },
  {
    id: 2,
    title: "Mənzil-Tikinti Kooperativi",
    name: "PORT BAKU",
  },
  {
    id: 3,
    title: "Mənzil-Tikinti Kooperativi",
    name: "PORT BAKU",
  },
  {
    id: 4,
    title: "Mənzil-Tikinti Kooperativi",
    name: "PORT BAKU",
  },
  {
    id: 5,
    title: "Mənzil-Tikinti Kooperativi",
    name: "PORT BAKU",
  },
  {
    id: 6,
    title: "Mənzil-Tikinti Kooperativi",
    name: "PORT BAKU",
  },
  {
    id: 7,
    title: "Mənzil-Tikinti Kooperativi",
    name: "PORT BAKU",
  },
  {
    id: 8,
    title: "Mənzil-Tikinti Kooperativi",
    name: "PORT BAKU",
  },
];

const Body = () => {
  const { openedSettingBar } = useSelector((state) => state.themes);
  const [active, setActive] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const btnRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Stack
      flexDirection={{ xs: "column", md: "row" }}
      justifyContent="space-between"
    >
      <Box className="w-full md:w-[40%]">
        <Box className="rounded p-4 mb-4 dark:text-text1 dark:bg-gradient-to-r  dark:bg-bgMain">
          <Stack
            direction="row"
            justifyContent="space-between"
            className="relative mb-3"
          >
            <Stack direction="row" spacing={1}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Box>
                <Typography className="text-textDark2">710 B</Typography>
                <Typography className="text-textDark3 ">
                  Mənzil sahibi
                </Typography>
              </Box>
            </Stack>
            <IconButton
              ref={btnRef}
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <MoreHorizIcon />
            </IconButton>

            {openMenu ? (
              <CustomMenu
                className="top-12 right-4 width-40"
                ref={btnRef}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              >
                <MenuItem>
                  <Link to="/profile">Profilə düzəliş et</Link>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(setOpenedSettingBar(!openedSettingBar));
                    setOpenMenu(false);
                  }}
                >
                  Ayarlar
                </MenuItem>
              </CustomMenu>
            ) : null}
          </Stack>

          <Box>
            <List>
              {lists.map((list) => (
                <ListItem key={list.id} className="p-0">
                  <ListItemButton
                    onClick={(e) => {
                      navigate(list.path);
                      setActive(list.id);
                    }}
                    className={`${
                      active === list.id ? "bg-[#ffffff14]" : ""
                    } rounded`}
                  >
                    <ListItemIcon>
                      <NewspaperIcon />
                    </ListItemIcon>
                    <ListItemText primary={list.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        <Box className="rounded p-6 mb-6 dark:text-text1 dark:bg-bgMain">
          <Typography
            className="cursor-pointer select-none text-logoColor hover:text-yellow-600 text-lg w-fit font-semibold"
            onClick={() => setOpenModal(true)}
          >
            Port Baku
          </Typography>
          <Typography className="text-textDark2">
            Kompleksə daxil olan binaların sayı: 3
          </Typography>
          <List sx={{ width: "100%", maxWidth: 360 }}>
            <ListItem className="flex items-center" alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                className="text-textDark4 dark:text-text1"
                primary="Tower A"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className="flex items-center" alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                className="text-textDark4 dark:text-text1"
                primary="Tower B"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem className="flex items-center" alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                className="text-textDark4 dark:text-text1"
                primary="Tower C"
              />
            </ListItem>
          </List>
        </Box>

        {openModal ? (
          <CustomModal
            title="Port Baku"
            handleClose={() => setOpenModal(false)}
          >
            <Box>
              <Box>
                <img
                  className="h-[320px] w-full object-cover object-center"
                  src={portBakuImg}
                  alt="port-baku-image"
                />
              </Box>
              <Box>
                {modalList.map((item) => (
                  <Stack
                    key={item.id}
                    justifyContent="space-between"
                    direction="row"
                    alignItems="center"
                    className="dark:text-text1 p-3"
                  >
                    <Typography>{item.title}</Typography>
                    <Typography>{item.name}</Typography>
                  </Stack>
                ))}
              </Box>
            </Box>
          </CustomModal>
        ) : null}

        <Box className="rounded mb-6 dark:bg-bgMain">
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

      <Box className="w-full md:w-[58%] rounded p-4 text-textDark4 dark:text-text1 dark:bg-bgMain">
        <Outlet />
      </Box>
    </Stack>
  );
};

export default Body;
