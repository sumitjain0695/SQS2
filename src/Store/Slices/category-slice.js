import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const categoryslice = createSlice({
  name: "categoryslice",
  initialState: {
    category: {},
  },
  reducers: {
    setCategoryState: (state, actions) => {
      state.category[actions.payload] = [];
    },
    setCardState: (state, actions) => {
      state.category[actions.payload.category].push({index:state.category[actions.payload.category].length, name:actions.payload.data});
    },
  },
});

export default categoryslice.reducer;

export const { setCategoryState, setCardState } = categoryslice.actions;

export const setCategory = (current) => (dispatch) => {
  console.log("setting category", current);
  if (getCategoryState[current]) {
    window.alert("already have this category");
  } else {
    dispatch(setCategoryState(current));
  }
};

export const setCard = (data, category) => (dispatch) => {
  console.log("setting card", data, category);
  dispatch(setCardState({ data, category }));
};

export const getCategoryState = (state) => state.categoryslice.category;
