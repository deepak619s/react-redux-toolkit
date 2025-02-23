import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/tasks/taskSlice";

//! (New Style) :-
export const store = configureStore({
  reducer: {
    taskReducer,
  },
});
