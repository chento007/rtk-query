import { removeRefreshToken, secureRefreshToken } from "@/lib/cryptography";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  access: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.access = action.payload.access;
      secureRefreshToken(action.payload.refreshToken);
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = "";
      state.access = null;
      removeRefreshToken();
      console.log("logout");
    },
  },
});

export const { setCredentials, logout, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state?.auth.user;
export const selectCurrentAccessToken = (state) => state?.auth.access;
