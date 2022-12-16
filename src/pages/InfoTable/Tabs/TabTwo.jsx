import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {
  Stack,
  Box,
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
  ListItem,
  List,
} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img1 from "../../../assets/images/tabone-slider/port-baku_16406201505279.jpg";
import img2 from "../../../assets/images/tabone-slider/port-baku-residence_16406207111371.jpg";
import img3 from "../../../assets/images/tabone-slider/port-baku-residence_16406207114647.jpg";
import { motion } from "framer-motion";

const TabTwo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      exit={{ opacity: "0" }}
      transition={{ duration: 1 }}
    >
      <Stack direction={{ xs: "column", lg: "row" }} spacing={4}>
        <Box className="w-full lg:w-[38%]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            //   spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="select-none h-[320px] rounded"
          >
            <SwiperSlide>
              <img
                src={img1}
                alt="image 1"
                className="object-center object-cover w-full h-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="image 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="image 3" />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box className="w-full lg:w-1/2 shadow-2xl flex-1 p-3 dark:bg-gradient-to-r dark:from-mainSecondary dark:to-mainPrimary rounded ">
          <Typography className="uppercase text-text1">
            Ətraflı Məlumat
          </Typography>
          <Box>
            <List sx={{ width: "100%", maxWidth: 360 }}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Stack>
    </motion.div>
  );
};

export default TabTwo;
