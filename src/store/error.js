import { createSlice } from "@reduxjs/toolkit";

const initialErrorState = { error: false };

const errorSlice = createSlice({
  name: "error",
  initialState: initialErrorState,
  reducers: {
    error(state, action) {
      state.error = action.payload;
    },
  },
});
 
export const errorActions = errorSlice.actions;

export default errorSlice.reducer;
