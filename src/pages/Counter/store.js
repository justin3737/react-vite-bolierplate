import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "/src/components/Counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
