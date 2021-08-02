import { configureStore } from "@reduxjs/toolkit";

import postReducer from './post';
import commentReducer from './comment';
import loadingReducer from './loading';
import errorReducer from './error';
import inputReducer from './input';

const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentReducer,
    loading: loadingReducer,
    input: inputReducer,
    error: errorReducer,
  },
});

export default store;
