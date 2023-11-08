import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URI = "http://localhost:9999/api/v1";

const signIn = createAsyncThunk("user/signin", async ({ formData, cb }) => {

  try {
    const res = await axios.post(`${API_URI}/user/signin`, formData);

    // set token to localStorage
    if (res.status === 200) {
      localStorage.setItem("token", res.data.data.token);
    }

    cb?.(res);
    return res.data.data;
  } catch (error) {
    cb?.(error.response);
  }
});


const signUp = createAsyncThunk("user/signup", async ({ formData, cb }) => {
  try {
    const res = await axios.post(`${API_URI}/user/signup`, formData);

    cb?.(res);
    return res.data.data.user;
  } catch (error) {
    cb?.(error.response);
  }
});

const getMe = createAsyncThunk("/getMe", async ({ token, cb }) => {
  try {
    let configs = {
      headers: { "Authorization": `Bearer ${token}` }
    };
    const res = await axios.get(`${API_URI}/user/get-me`, configs);

    cb?.(res);
    return res.data.data.user;
  } catch (error) {
    cb?.(error.response);
  }
});

export { signIn, signUp, getMe };