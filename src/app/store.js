import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import themesReducer from "./Slicers/themes";
import eventReducer from "./Slicers/events";
import menusReducer from "./Slicers/menus";
import menuReducer from "./Slicers/restaurantMenu";
import authReducer from "./Slicers/auth";

export const store = configureStore({
  reducer: {
    themes: themesReducer,
    events: eventReducer,
    menus: menusReducer,
    restaurantMenu: menuReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
