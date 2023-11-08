import { createSlice } from "@reduxjs/toolkit";
import { getMe, signIn, signUp } from "../actions/userAction";

let initialState = {
  isLoading: false,
  isError: false,
  token: "",
  userDetails: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // user signin
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.userDetails = Object.assign({}, action.payload.user);
      state.isLoading = false;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });

    // user sign-up
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDetails = Object.assign({}, action.payload);
    });
    builder.addCase(signUp.rejected, (state) => {
      state.isError = true;
    });

    // Get me
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDetails = Object.assign({}, action.payload);
    });
    builder.addCase(getMe.rejected, (state) => {
      state.isError = true;
    });
  }
});


export default userSlice.reducer;