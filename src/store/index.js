import { createStore, combineReducers } from "@reduxjs/toolkit";

import postReducer from "./post";
import commentReducer from "./comment";
import loadingReducer from "./loading";
import errorReducer from "./error";
import inputReducer from "./input";

const saveToLocalStorage = (state) => {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("localState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serialisedState = localStorage.getItem("localState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

const store = createStore(
  combineReducers({
    posts: postReducer,
    comments: commentReducer,
    loading: loadingReducer,
    input: inputReducer,
    error: errorReducer,
  }),
  loadFromLocalStorage()
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
