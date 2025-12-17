import { configureStore } from "@reduxjs/toolkit";
import stepReducer from './stepSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    steps:stepReducer,
  },
});
