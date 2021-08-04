import { createSlice } from "@reduxjs/toolkit";

const initialCommentState = {
  comments: [],
  initialized: false,
};

const commentSlice = createSlice({
  name: "comment",
  initialState: initialCommentState,
  reducers: {
    comments(state, action) {
      state.comments = action.payload;
      state.initialized = true;
    },
    newComment(state, action) {
      const id =
        state.comments.sort((a, b) => a.id - b.id)[state.comments.length - 1]
          .id + 1;
      state.comments = [...state.comments, { ...action.payload, id }];
    },
  },
});

export const commentActions = commentSlice.actions;

export default commentSlice.reducer;
