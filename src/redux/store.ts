import {configureStore} from '@reduxjs/toolkit';
import Auth from './reducers/Auth';

export const store = configureStore({
  reducer: {
    Auth,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;