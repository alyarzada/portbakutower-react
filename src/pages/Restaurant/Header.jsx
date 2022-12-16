import React, { useState } from "react";
import { Box, Stack, Button, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import FilterMenu from "./FilterMenu";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const { t } = useTranslation();
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <Box className="relative">
      <Stack direction="row" justifyContent="space-between" className="mb-10">
        <Button
          onClick={() => setOpenDropdown((prev) => !prev)}
          className="capitalize bg-logoColor"
          variant="contained"
          startIcon={<RestaurantMenuIcon />}
          endIcon={<ArrowDropDownIcon />}
        >
          menu
        </Button>
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
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {t("restoran")}
          </Typography>
        </Breadcrumbs>
      </Stack>

      {openDropdown ? <FilterMenu setOpenDropdown={setOpenDropdown} /> : null}
    </Box>
  );
};

export default Header;
