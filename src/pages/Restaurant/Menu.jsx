import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import Category from "./Category";
import { setShowCardIcon } from "../../app/Slicers/themes";
import { useScrollToUp } from "../../hooks/useScrollToUp";

const Menu = () => {
  const { disableTransform } = useSelector((state) => state.themes);
  const { menu } = useSelector((state) => state.restaurantMenu);
  const dispatch = useDispatch();
  useScrollToUp();

  useEffect(() => {
    dispatch(setShowCardIcon(true));
    return () => {
      dispatch(setShowCardIcon(false));
    };
  }, []);

  return (
    <Box className={`w-full ${disableTransform ? "transform-none" : ""}`}>
      <Header />
      <Box>
        {menu.length > 0 ? (
          menu.map((category) => {
            return <Category key={category.id} {...category} />;
          })
        ) : (
          <Typography className="text-red-500">Tezlikle...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Menu;
