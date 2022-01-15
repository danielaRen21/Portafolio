import {createSlice} from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'users',
  initialState:{ 
      list: 1
  },
  reducers: {
    setUser: (state, action) => {
        state.list = action.payload;
    }
  },
});

export const {
  setUser
} = appSlice.actions;

export default appSlice.reducer;