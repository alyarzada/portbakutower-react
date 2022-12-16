import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  incrementAmount,
  decrementAmount,
  deleteCardItems,
} from "../../app/Slicers/restaurantMenu";
import { IconButton, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import CustomDialogModal from "../../components/UI/CustomDialogModal";

const CardItem = ({ item }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        key={item.id}
        className="flex gap-x-3 p-4 justify-between items-center border-b "
      >
        <img
          src={item.img}
          className="rounded-[50%] w-24 h-24 object-cover object-center"
        />
        <Typography className="text-text1">{item.name}</Typography>
        <Box className="rounded-[20px] py-1 px-4 border border-text1 flex gap-x-6 text-white items-center">
          <Typography
            onClick={() => dispatch(decrementAmount(item.id))}
            className="cursor-pointer select-none"
          >
            -
          </Typography>
          <Typography>{item.count}</Typography>
          <Typography
            onClick={() => dispatch(incrementAmount(item.id))}
            className="cursor-pointer select-none"
          >
            +
          </Typography>
        </Box>
        <Typography className="text-text1">price:{item.price} AZN</Typography>
        <Typography className="text-text1">amount:{item.amount} AZN</Typography>
        <IconButton
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          <DeleteIcon className="text-red-500" />
        </IconButton>
      </Box>

      <CustomDialogModal
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        handleAgree={() => dispatch(deleteCardItems(item.id))}
        question="Bu məhsulu səbətdən silmək istədiyinizə əminsiniz?"
      />
    </motion.div>
  );
};

export default CardItem;
