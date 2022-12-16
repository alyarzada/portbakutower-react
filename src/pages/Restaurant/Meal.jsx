import React, { useState } from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
  Rating,
  Snackbar,
} from "@mui/material";
import CustomModal from "../../components/UI/CustomModal";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { addToCard } from "../../app/Slicers/restaurantMenu";
import { useLocation } from "react-router-dom";

const Meal = ({ item }) => {
  const { img, name, price, description, id } = item;
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(false);
  const [mealCounter, setMealCounter] = useState(1);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const { card } = useSelector((state) => state.restaurantMenu);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        Bağla
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="success"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const addToCardHandler = () => {
    dispatch(
      addToCard({
        ...item,
        count: mealCounter,
        amount: mealCounter * price,
      })
    );
    handleClick();
    setOpenModal(false);
  };

  return (
    <Box>
      <Box
        className="hover:scale-[1.05] transition-transform duration-500 text-textDark relative drop-shadow-lg hover:drop-shadow-xl dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary bg-bgLight dark:text-white text-text5 rounded-lg pt-4 pb-3 px-3"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <img
          className={`rounded-[50%] w-28 h-28 object-cover object-center absolute -top-4 -left-1 ${
            hover ? "rotate-45 transition-transform duration-300" : ""
          }`}
          src={img}
          alt={name}
        />
        <Box className="h-20 flex justify-end items-center px-6 py-4">
          <Typography className="dark:text-white font-bold text-lg">
            {price} AZN
          </Typography>
        </Box>
        <Typography className="dark:text-logoColor mt-2 font-[500]">
          {name}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Rating
            color="red"
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <IconButton
            onClick={() => setOpenModal(true)}
            className="dark:text-text1 text-sm select-none cursor-pointer dark:hover:text-logoColor"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Stack>
      </Box>

      <Snackbar
        open={open}
        severity="success"
        autoHideDuration={2000}
        onClose={handleClose}
        message="Məhsul səbətə əlavə edildi"
        action={action}
      />

      {openModal ? (
        <CustomModal
          handleClose={() => {
            setOpenModal(false);
            setErrorMessage("");
          }}
          title={name}
        >
          <Box className="flex flex-col md:flex-row gap-x-3">
            <Box>
              <img className="rounded" src={img} alt={name} />
            </Box>
            <Box>
              <Typography className="text-text1 mb-2">
                <span className="text-logoColor font-bold">
                  {" "}
                  Ingredientlər:
                </span>{" "}
                {description}
              </Typography>
              <Box className="flex items-center ">
                <Typography className="text-logoColor font-bold">
                  Miqdar:
                </Typography>
                <IconButton
                  onClick={() => {
                    if (mealCounter <= 1) {
                      setMealCounter(1);
                    } else {
                      setMealCounter(mealCounter - 1);
                    }
                  }}
                >
                  <IndeterminateCheckBoxOutlinedIcon />
                </IconButton>
                <Typography className="text-text1 align-bottom">
                  {mealCounter}
                </Typography>
                <IconButton onClick={() => setMealCounter(mealCounter + 1)}>
                  <AddBoxOutlinedIcon />
                </IconButton>
              </Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography className="text-text1">
                  <span className="text-logoColor font-bold">Mebleg:</span>{" "}
                  {price * mealCounter} AZN
                </Typography>

                {card.includes(card.find((item) => item.id === id)) ? (
                  <Typography className="bg-red-500 text-white p-2 rounded">
                    Bu məhsul səbətdə var!
                  </Typography>
                ) : (
                  <Button
                    variant="contained"
                    className="capitalize bg-logoColor"
                    onClick={addToCardHandler}
                  >
                    Sebete at
                  </Button>
                )}
              </Stack>
              <Typography className="text-red-500">{errorMessage}</Typography>
            </Box>
          </Box>
        </CustomModal>
      ) : null}
    </Box>
  );
};

export default Meal;
