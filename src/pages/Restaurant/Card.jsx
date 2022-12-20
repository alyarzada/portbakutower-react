import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  Alert,
  AlertTitle,
  Breadcrumbs,
  Button,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// import CreditCard from "./CreditCard";
import CardItem from "./CardItem";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { setShowCardIcon } from "../../app/Slicers/themes";

const Card = () => {
  const { card } = useSelector((state) => state.restaurantMenu);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setShowCardIcon(true));
    return () => {
      dispatch(setShowCardIcon(false));
    };
  }, []);

  return (
    <div>
      {card.length > 0 ? (
        <Box>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" component="h1" className="text-text1 mb-6">
              Shopping Card
            </Typography>
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                className="text-logoColor"
                to="/"
              >
                <HomeIcon
                  sx={{ mr: 0.5 }}
                  className="text-logoColor align-middle"
                  fontSize="inherit"
                />
                {t("anasehife")}
              </Link>
              <Link
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                className="text-logoColor"
                to="/restaurant-menu-orders"
              >
                <HomeIcon
                  sx={{ mr: 0.5 }}
                  className="text-logoColor align-middle"
                  fontSize="inherit"
                />
                {t("restoran")}
              </Link>
              <Typography
                sx={{ display: "flex", alignItems: "center" }}
                color="text.primary"
              >
                <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                {t("sebet")}
              </Typography>
            </Breadcrumbs>
          </Stack>
          <Stack
            direction="row"
            spacing={3}
            className="p-3 dark:bg-gradient-to-r dark:from-mainPrimary min-h-[70vh] dark:to-mainSecondary"
          >
            <Box className="flex flex-1 flex-col gap-4 rounded-lg">
              <Box>
                <AnimatePresence>
                  {card.map((item) => {
                    return <CardItem key={item.id} item={item} />;
                  })}
                </AnimatePresence>
              </Box>
              <div className="text-text1 flex justify-end">
                <Typography className="font-semibold">
                  {" "}
                  Total:{" "}
                  {card.reduce((acc, item) => {
                    return acc + item.amount;
                  }, 0)}{" "}
                  AZN
                </Typography>
              </div>
            </Box>

            <Box className="w-[24%] bg-logoColor rounded-lg p-6 relative">
              <Box>
                <Typography className="dark:text-text1">
                  Card Details
                </Typography>
              </Box>

              {/* <Box>
                <CreditCard />
              </Box> */}
            </Box>
          </Stack>
        </Box>
      ) : (
        <Box>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Səbətdə məhsul yoxdur!— <strong>Səbətə məhsul əlavə edin!</strong>
          </Alert>
        </Box>
      )}
    </div>
  );
};

export default Card;
