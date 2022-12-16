import React, { forwardRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Slide,
} from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CustomDialogModal = ({
  openDialog,
  setOpenDialog,
  handleAgree,
  question,
}) => {
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog
      open={openDialog}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#0d1031",
          backgroundImage: "none",
        },
      }}
    >
      <DialogTitle>{openDialog.message}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {question}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button className="capitalize" variant="outlined" onClick={handleClose}>
          Ləğv et
        </Button>
        <Button
          className="capitalize"
          variant="contained"
          color="error"
          onClick={handleAgree}
        >
          Bəli
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialogModal;
