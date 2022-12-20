import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menus: [],
  sidebarMenu: [],
};

export const menusSlicer = createSlice({
  name: "menus",
  initialState: initialState,
  reducers: {
    getMenus: (state, action) => {
      state.menus = action.payload;
    },
    getSidebarMenu: (state, action) => {
      state.sidebarMenu = action.payload;
    },
    reOrderMenus: (state, action) => {
      state.menus = action.payload;
    },
    reOrderPanels: (state, action) => {
      state.menus = state.menus.map((menu) => {
        if (action.payload.id === menu.id) {
          return { ...menu, panels: action.payload.data };
        }
        return menu;
      });
    },
  },
});

export const { reOrderMenus, reOrderPanels, getMenus, getSidebarMenu } =
  menusSlicer.actions;
export default menusSlicer.reducer;
