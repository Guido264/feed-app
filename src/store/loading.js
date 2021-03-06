import { createSlice } from "@reduxjs/toolkit";

const initialLoadingState = { loading: false };

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialLoadingState,
  reducers: {
    loading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const loadingActions = loadingSlice.actions;

export default loadingSlice.reducer;
