import { configureStore } from '@reduxjs/toolkit';
import sportsSlice from './slices/sportsSlice';

export const store = configureStore({
  reducer: {
    reducer: {
      sports: sportsSlice
    }
  },
});
