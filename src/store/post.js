import { createSlice } from "@reduxjs/toolkit";

const initialPostState = { posts: [] };

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    posts(state, action) {
      state.posts = action.payload;
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
