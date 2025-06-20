import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import movieReducer from './movieSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    movies: movieReducer,
  },
});

export default store;