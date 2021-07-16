import { configureStore } from "@reduxjs/toolkit";
import categoryslice from "./Slices/category-slice";

const store = configureStore({
  reducer: {
      categoryslice,
  },
});
export default store;
