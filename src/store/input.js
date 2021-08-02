import { createSlice } from "@reduxjs/toolkit";

const initialInputState = {
  name: "",
  email: "",
  body: ""
  // nameValidation: false,
  // emailValidation: false,
  // bodyValidation: false,
  // formValidation: false,
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
    }
    // nameValidation(state) {
    //   state.nameValidation = state.name.trim().length > 3;
    // },
    // emailValidation(state) {
    //   state.emailValidation = state.email.includes("@");
    // },
    // bodyValidation(state) {
    //   state.bodyValidation = state.body.trim().length > 6;
    // },
    // formValidation(state) {
    //   state.formValidation = action.payload;
    // },
  },
});

export const inputActions = inputSlice.actions;

export default inputSlice.reducer;
