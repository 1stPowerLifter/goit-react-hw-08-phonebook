import { createSlice, isAllOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleTrueAuth = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOut = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshUser = (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(refreshUser.fulfilled, handleRefreshUser)
      .addMatcher(
        isAllOf(register.fulfilled, logIn.fulfilled), handleTrueAuth)
      .addMatcher(
        isAllOf(refreshUser.pending, refreshUser.rejected), state => state.isRefreshing = true)
});

export const authReducer = authSlice.reducer;
