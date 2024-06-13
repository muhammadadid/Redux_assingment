
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themSlice.js';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
export default store;