import {createAsyncThunk} from '@reduxjs/toolkit';
import {signIn} from 'next-auth/react';

export const authLogin = createAsyncThunk('auth/login', (credentials) =>
  signIn('credentials', credentials)
    .then(() => {
      return 'IS_LOGGED';
    })
    .catch((err) => {
      console.error(err);
      return err;
    })
);
