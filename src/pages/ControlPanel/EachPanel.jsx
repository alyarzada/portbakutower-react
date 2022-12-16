import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Stack } from "@mui/material";
import SubMenuPanel from "./subMenuPanel";
import CustomModal from "../../components/UI/CustomModal";

const EachPanel = ({
  img,
  title,
  subCategory,
  link,
  id,
  panelId,
  description,
}) => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const parentModalRef = useRef();

  const closeModal = () => setOpenModal(false);

  return (
    <Box>
      <Box
        onClick={() => {
          if (link) {
            navigate(link);
          } else {
            setOpenModal(true);
          }
        }}
        className="text-textDark  drop-shadow-lg hover:drop-shadow-xl dark:bg-bgMain bg-bgLight ela transition-all duration-700 dark:text-white text-text5 overflow-hidden h-[170px] cursor-pointer group flex flex-col rounded after:content-[''] after:bg-logoColor after:absolute after:-left-1/2 after:top-0 after:pt-[100%] after:rounded-[50%] after:w-full aye hoverbefore after:transition-all after:duration-1000 items-center justify-center relative gap-y-3 w-full"
      >
        <img
          className="imgscale z-30 w-[24%] sm:w-[30%] xmd:w-[26%] md:w-[28%] xxl:w-[20%] exl:w-[15%] transition-transform duration-1000"
          src={img}
          alt="image"
        />
        <Typography className="z-30 h-5 group-hover:text-lg group-hover:text-[#2b2b2b] group-hover:font-medium transition-all duration-1000">
          {t(title)}
        </Typography>
      </Box>
      {openModal ? (
        <CustomModal
          ref={parentModalRef}
          title={t(title)}
          open={openModal}
          handleClose={closeModal}
        >
          <Stack
            className="my-3"
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            {panelId === 10 ? (
              <Typography
                className="dark:text-text1"
                variant="h5"
                component="h1"
              >
                {description}
              </Typography>
            ) : (
              subCategory?.map((category, index) => (
                <SubMenuPanel
                  closeParentModal={setOpenModal}
                  key={index}
                  ref={parentModalRef}
                  {...category}
                />
              ))
            )}
          </Stack>
        </CustomModal>
      ) : null}
    </Box>
  );
};

export default EachPanel;
