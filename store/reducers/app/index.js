import {createSlice} from '@reduxjs/toolkit';
import {authLogin} from './thunks';

const initialState = {
  user: null,
  auth: {},
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogin.fulfilled, (state, action) => {
      // Add user to the state array
      state.auth = action.payload;
      return state;
    });
  },
});

export const {setUser, reset} = appSlice.actions;
export default appSlice.reducer;
