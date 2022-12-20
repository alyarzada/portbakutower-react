import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { username: "", password: "" },
};

const authSlicer = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginHandle: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginHandle } = authSlicer.actions;
export default authSlicer.reducer;
