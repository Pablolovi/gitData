import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  userData: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setUsername, setUserData, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;

