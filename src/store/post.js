import { createSlice } from "@reduxjs/toolkit";

const initialPostState = { posts: [], initialized: false };

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    posts(state, action) {
      state.posts = action.payload;
      state.initialized = true;
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
