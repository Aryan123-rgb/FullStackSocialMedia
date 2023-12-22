import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../slice/themeSlice";

const store = configureStore({
  reducer: {
    themeReducer: themeSlice,
  },
});

export default store;
