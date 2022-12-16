import React, { useState, forwardRef, useEffect } from "react";
import { Box, Typography, Stack, Button, IconButton } from "@mui/material";
import NestedModal from "../../components/UI/NestedModal";

const SubMenuPanel = ({ img, title, closeParentModal }, ref) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Box
        onClick={() => {
          setOpen(true);
        }}
        className="hover:scale-[1.05] cursor-pointer transition-transform duration-300 rounded flex flex-col items-center justify-center gap-2 h-28 xmd:h-auto bg-zinc-300 px-2 sm:px-6 py-6"
      >
        <img className="w-[70%] sm:w-full" src={img} alt="image" />
        <Typography className="text-sm sm:text-lg text-center">
          {title}
        </Typography>
      </Box>
      {open ? (
        <NestedModal handleClose={() => setOpen(false)} ref={ref}>
          <Box>
            <Typography className="text-white">
              Əməkdaşın çağrılması üçün müraciəti təsdiqləyin.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1}>
            <Button
              onClick={() => setOpen(false)}
              className="capitalize"
              variant="outlined"
              color="error"
            >
              Ləğv et
            </Button>
            <Button className="capitalize" variant="contained" color="success">
              Təsdiq edin
            </Button>
          </Stack>
        </NestedModal>
      ) : null}
    </Box>
  );
};

export default forwardRef(SubMenuPanel);
