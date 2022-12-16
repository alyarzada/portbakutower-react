import React, { forwardRef, useEffect, useRef } from "react";
import {
  setLight,
  setBoxed,
  setLeftLight,
  setScrollable,
} from "../../app/Slicers/themes";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedSettingBar } from "../../app/Slicers/themes";
import { setDraggable } from "../../app/Slicers/themes";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Box,
  IconButton,
  Switch,
} from "@mui/material";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

const SettingBar = (props, ref) => {
  const { openedSettingBar } = useSelector((state) => state.themes);
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const barRef = useRef(null);

  useEffect(() => {
    const handleClose = (e) => {
      if (!e.path.includes(barRef.current) && !e.path.includes(ref.current)) {
        dispatch(setOpenedSettingBar(false));
      }
    };
    document.addEventListener("mousedown", handleClose);

    return () => document.removeEventListener("mousedown", handleClose);
  }, []);

  return (
    <Box
      ref={barRef}
      className={`${
        openedSettingBar ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 fixed rounded-bl-lg rounded-tl-lg z-20 justify-between top-0 right-0 w-[260px] sm:w-[300px] bg-[#37404A] h-screen shadow-shadowSettings `}
    >
      {/* header */}
      <Box className="bg-[#313A46] dark:bg-[#C9B26D] rounded-tl-lg flex items-center justify-between px-5 py-6">
        <h5 className="text-white text-[.9rem] font-semibold">Settings</h5>
        <IconButton onClick={() => dispatch(setOpenedSettingBar(false))}>
          <HighlightOffRoundedIcon />
        </IconButton>
      </Box>

      {/* body */}
      <Box className="rounded-bl-lg settingsContainer bg-bgLight dark:bg-gradient-to-r dark:from-mainPrimary dark:to-mainSecondary h-full py-10  overflow-y-auto">
        <Box className="px-4 mb-6 ">
          <h5 className="text-textDark dark:text-text3 text-[.9rem] font-semibold">
            Color Scheme
          </h5>
          <hr className="h-[1px] text-text3 opacity-25 my-4" />

          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="darkmode"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="lightmode"
                control={
                  <Radio
                    className="text-black dark:text-white"
                    onChange={() => dispatch(setLight(true))}
                  />
                }
                label={
                  <span className="text-textDark dark:text-text1">
                    Light Mode
                  </span>
                }
                className="text-text1"
              />
              <FormControlLabel
                value="darkmode"
                control={
                  <Radio
                    className="text-black dark:text-white"
                    onChange={() => dispatch(setLight(false))}
                  />
                }
                label={
                  <span className="text-textDark dark:text-text1">
                    Dark Mode
                  </span>
                }
                className="text-text1"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box className="px-4 mb-6">
          <h5 className="text-textDark dark:text-text3 text-[.9rem] font-semibold">
            Width
          </h5>
          <hr className="h-[1px] text-text3 opacity-25 my-4" />
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="fluid"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="fluid"
                control={
                  <Radio
                    className="text-black dark:text-white"
                    onChange={() => dispatch(setBoxed(false))}
                  />
                }
                label={
                  <span className="text-textDark dark:text-text1">Fluid</span>
                }
                className="text-text1"
              />
              <FormControlLabel
                value="boxed"
                control={
                  <Radio
                    className="text-black dark:text-white"
                    onChange={() => dispatch(setBoxed(true))}
                  />
                }
                className="text-text1"
                label={
                  <span className="text-textDark dark:text-text1">Boxed</span>
                }
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box className="px-4 mb-10">
          <h5 className="text-textDark dark:text-text3 text-[.9rem] font-semibold">
            Left Sidebar
          </h5>
          <hr className="h-[1px] text-text3 opacity-25 my-4" />
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="dark"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="light"
                control={
                  <Radio
                    className="text-black dark:text-white"
                    onChange={() => dispatch(setLeftLight("light"))}
                  />
                }
                className="text-text1"
                label={
                  <span className="text-textDark dark:text-text1">Light</span>
                }
              />
              <FormControlLabel
                value="dark"
                control={
                  <Radio
                    className="text-black dark:text-white"
                    onChange={() => dispatch(setLeftLight("dark"))}
                  />
                }
                className="text-text1"
                label={
                  <span className="text-textDark dark:text-text1">Dark</span>
                }
              />
            </RadioGroup>
          </FormControl>

          <br />
          <br />

          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="fixed"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="fixed"
                control={
                  <Radio
                    className="text-black dark:text-white"
                    onChange={() => dispatch(setScrollable(false))}
                  />
                }
                label={
                  <span className="text-textDark dark:text-text1">Fixed</span>
                }
                className="text-text1"
              />

              <FormControlLabel
                value="scrollable"
                control={
                  <Radio
                    className="text-black dark:text-white"
                    onChange={() => dispatch(setScrollable(true))}
                  />
                }
                className="text-text1"
                label={
                  <span className="text-textDark  dark:text-text1">
                    Scrollable
                  </span>
                }
              />
            </RadioGroup>
          </FormControl>

          <br />
          <br />

          <Box>
            <h5 className="text-textDark dark:text-text3 text-[.9rem] font-semibold">
              Functionality
            </h5>
            <hr className="h-3 text-text3 opacity-25 my-4" />
            <FormControlLabel
              className="dark:text-text1"
              control={
                <Switch
                  onChange={(e) => {
                    dispatch(setDraggable(e.target.checked));
                  }}
                />
              }
              label="Draggable"
            />
          </Box>
          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default forwardRef(SettingBar);
