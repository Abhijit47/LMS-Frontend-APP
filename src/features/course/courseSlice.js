import { createSlice } from "@reduxjs/toolkit";
import { getAllCourses, getCourses, getOneCourse } from "../actions/courseAction";

let initialState = {
  isLoading: false,
  isError: false,
  courses: [],
  course: {}
};

const courseSlices = createSlice({
  name: "course",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {

    // Get Courses => public
    builder.addCase(getCourses.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.isLoading = false;
      state.courses = action.payload;
    });
    builder.addCase(getCourses.rejected, (state, action) => {
      state.isError = true;
    });

    // Get One Course
    builder.addCase(getOneCourse.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getOneCourse.fulfilled, (state, action) => {
      state.isLoading = false;
      state.course = Object.assign({}, action.payload);
    });
    builder.addCase(getOneCourse.rejected, (state, action) => {
      state.isError = true;
    });

    // Get all courses =>Private
    builder.addCase(getAllCourses.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      state.isLoading = false;
      state.courses = action.payload;
    });
    builder.addCase(getAllCourses.rejected, (state, action) => {
      state.isError = true;
    });
  }
});

export default courseSlices.reducer;