import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const API_URI = `${process.env.REACT_APP_API_URL}`;

// Get All Courses => public access
const getCourses = createAsyncThunk("/getCourses", (async ({ category, cb }) => {

  try {
    const res = await axios.get(`${API_URI}/${category}`);

    cb?.(res);
    return res.data.data.courses;
  } catch (err) {
    console.error(err);
    cb?.(err.response);
  }
}));

// Create course => Private access
const createCourse = createAsyncThunk("/createCourse", (async ({ courseFormData, token, cb }) => {
  try {
    let configs = {
      headers: { "Authorization": `Bearer ${token}` }
    };
    const res = await axios.post(`${API_URI}/course/create-course`, courseFormData, configs);
    // console.log(res);
    if (res.status === 201) {
      cb?.(res);
    } else {
      toast.info(res.statusText, { autoClose: 850, position: "bottom-center", hideProgressBar: true });
    }
  } catch (err) {
    // console.log(err);
    cb?.(err.response);
  }
}));

// Add Section to course => Private course
const addSectionToCourse = createAsyncThunk("/addSectionToCourse", (async ({ formData, token, cb }) => {
  try {
    let configs = {
      headers: { "Authorization": `Bearer ${token}` }
    };
    const res = await axios.post(`${API_URI}/course/set-course`, formData, configs);
    console.log(res);
    if (res.status === 201) {
      cb?.(res);
    } else {
      toast.info(res.statusText, { autoClose: 850, position: "bottom-center", hideProgressBar: true });
    }
  } catch (err) {
    // console.log(err);
    cb?.(err.response);
  }
}));

// Get All Courses => Private access
const getAllCourses = createAsyncThunk("/allCourses", (async ({ category, token, cb }) => {
  try {
    let configs = {
      headers: { "Authorization": `Bearer ${token}` }
    };

    const res = await axios.get(`${API_URI}/course/${category}`, configs);
    if (res.status === 200) {
      cb?.(res);
      return res.data.data.courses;
    } else {
      cb?.(res.statusText);
    }
  } catch (err) {
    console.error(err);
    cb?.(err.response);
  }
}));

// Update a Section => Private access
const updateOneSection = createAsyncThunk("/updateOneSection", (async ({ formData, token, cb }) => { }));

// Get One Course => Private access
const getOneCourse = createAsyncThunk("/getOneCourse", (async ({ id, token, cb }) => {
  try {
    let configs = {
      headers: { "Authorization": `Bearer ${token}` }
    };
    const res = await axios.get(`${API_URI}/course/${id}`, configs);
    cb?.(res);
    return res.data.data.course;
  } catch (err) {
    console.log(err);
    cb?.(err.response);
  }
}));

// Export all action
export { getCourses, createCourse, addSectionToCourse, updateOneSection, getOneCourse, getAllCourses };

