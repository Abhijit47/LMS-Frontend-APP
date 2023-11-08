import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const API_URI = `http://localhost:9999/api/v1`;
const createQuery = createAsyncThunk("/createQuery", (async ({ contactFormData, cb }) => {
  try {
    const res = await axios.post(`${API_URI}/query/contact-us`, contactFormData);
    cb?.(res);
    return res.data.data.query;
  } catch (err) {
    console.error(err.message);
    cb?.(err.response);
  }
}));

const getAllQueries = createAsyncThunk("getAllQueries", (async ({ cb }) => {
  try {
    const res = await axios.get(`${API_URI}/query/get-queries`);
    cb?.(res);
    return res.data.data.queries;
  } catch (err) {
    console.error(err.message);
    cb?.(err.response);
  }
}));

export { createQuery, getAllQueries };