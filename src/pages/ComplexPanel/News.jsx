import React, { useState, useRef } from "react";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  IconButton,
  Divider,
  MenuItem,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import img from "../../assets/images/318a17c45445a58d01922f90c2a2e286.jpg";
import CustomMenu from "../../components/UI/CustomMenu";
import SaveIcon from "@mui/icons-material/Save";
import { motion } from "framer-motion";

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hidden: { opacity: 0, y: 50 },
};

const News = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const btnRef = useRef(null);

  const notify = () =>
    toast("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
      <Stack
        direction="row"
        justifyContent="space-between"
        className="relative"
      >
        <Stack direction="row" spacing={2}>
          <Avatar />
          <Box>
            <Typography>Rashad Huseynov</Typography>
            <Typography className="text-xs">
              1 ay evvel yerlesdirilib
            </Typography>
          </Box>
        </Stack>

        <Box>
          <IconButton
            onClick={() => {
              setOpenMenu((prev) => !prev);
            }}
            ref={btnRef}
          >
            <MoreHorizIcon />
          </IconButton>
        </Box>

        {openMenu ? (
          <CustomMenu
            className="w-200 top-12 right-2"
            ref={btnRef}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          >
            <MenuItem onClick={notify}>
              <SaveIcon className="mr-2 text-lg" />
              Postu yadda saxlamaq
            </MenuItem>

            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              pauseOnHover
              theme="light"
            />
          </CustomMenu>
        ) : null}
      </Stack>

      <Divider className="my-4" />

      <Box>
        <Typography className="mb-4 dark:text-text1 text-textDark4">
          Hörmətli Sakinlər, Su təhcizatının boru xəttinin ‘ Port Bazaar’ və
          ümumi restoranıar nöqtəsində tıxanma ilə əlaqədar aşağı qat
          avtodayanacaqlarda su axıntıları müşahidə olunur. Hal-hazırda
          bərpa-təmir işləri davam edir. Hörmətlə, Bina Rəhbərliyi
        </Typography>

        <Box>
          <img className="w-full" src={img} alt="image" />
        </Box>
      </Box>
    </motion.div>
  );
};

export default News;
