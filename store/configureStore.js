import {configureStore} from '@reduxjs/toolkit';
import {api} from '../services/api';
import users from './reducers/users';
import app from './reducers/app';


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    users,
    app,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
