import { createSlice } from "@reduxjs/toolkit";

const initialInputState = {
  name: "",
  email: "",
  body: "",
};

const inputSlice = createSlice({
  name: "input",
  initialState: initialInputState,
  reducers: {
    name(state, action) {
      state.name = action.payload;
    },
    email(state, action) {
      state.email = action.payload;
    },
    body(state, action) {
      state.body = action.payload;
    },
    resetInput(state) {
      state.name = "";
      state.email = "";
      state.body = "";
    },
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice.reducer;
