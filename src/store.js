import { configureStore } from "@reduxjs/toolkit";
import userSlices from "./features/user/userSlice";
import courseSlice from "./features/course/courseSlice";
import querySlice from './features/query/querySlice';

export const store = configureStore({
  reducer: {
    users: userSlices,
    courses: courseSlice,
    queries: querySlice
  }
});