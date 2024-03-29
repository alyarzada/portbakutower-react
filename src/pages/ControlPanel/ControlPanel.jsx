// Tunar
import React, { useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { ReactSortable } from "react-sortablejs";
import { reOrderMenus } from "../../app/Slicers/menus";
import ControlPanelHeader from "./Controlpanelheader";
import DashboardPanel from "./DashboardPanel";
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.css";
import { useScrollToUp } from "../../hooks/useScrollToUp";
import { dashboardPanels, adminDashboardPanels } from "../../data/data";
import { getMenus } from "../../app/Slicers/menus";

const ControlPanel = () => {
  const { disableTransform, isDraggable } = useSelector(
    (state) => state.themes
  );
  const { menus } = useSelector((state) => state.menus);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useScrollToUp();

  useEffect(() => {
    toast("Wow so easy!");
  }, []);

  useLayoutEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))?.username === "admin123") {
      dispatch(getMenus(adminDashboardPanels));
    } else {
      dispatch(getMenus(dashboardPanels));
    }
  }, [user]);

  return (
    <motion.div
      className={`w-full  ${disableTransform ? "transform-none" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <ControlPanelHeader />
      <ReactSortable
        list={menus.map((menu) => ({ ...menu, chosen: true }))}
        setList={(newState) => dispatch(reOrderMenus(newState))}
        animation={400}
        disabled={!isDraggable}
      >
        {menus.map((panel) => (
          <DashboardPanel key={panel.id} {...panel} />
        ))}
      </ReactSortable>
    </motion.div>
  );
};

export default ControlPanel;
