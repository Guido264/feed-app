import { createSlice } from "@reduxjs/toolkit";

const initialPostState = { posts: [], selectedPost: null };

const postSlice = createSlice({
  name: "post",
  initialState: initialPostState,
  reducers: {
    posts(state, action) {
      state.posts = action.payload;
    },
    selectedPost(state, action) {
      state.selectedPost = action.payload;
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;