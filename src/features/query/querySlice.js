import { createSlice } from "@reduxjs/toolkit";
import { createQuery, getAllQueries } from "../actions/queryAction";


let initialState = {
  isLoading: false,
  isError: false,
  queries: [],
  query: {}
};

const querySlice = createSlice({
  name: "query",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Create query
    builder.addCase(createQuery.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createQuery.fulfilled, (state, action) => {
      state.query = Object.assign({}, action.payload);
      state.isLoading = false;
    });
    builder.addCase(createQuery.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });

    // Get queries
    builder.addCase(getAllQueries.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllQueries.fulfilled, (state, action) => {
      state.queries = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllQueries.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  }
});


export default querySlice.reducer;