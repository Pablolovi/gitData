import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';  // Reducer para los todos
import userReducer from './userSlice';    // Reducer para los usuarios

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
  },
});
