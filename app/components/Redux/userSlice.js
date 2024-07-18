
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

export const registerUser = createAsyncThunk('user/register', async (userData) => {
  const response = await axios.post(`${BASEURL}/users/signup`, userData);
  return response.data;
});

export const loginUser = createAsyncThunk('user/login', async (userData) => {
  const response = await axios.post(`${BASEURL}/users/login`, userData);
  return response.data;
});

export const fetchProfile = createAsyncThunk('user/profile', async () => {
  const response = await axios.get(`${BASEURL}/users/profile`);
  return response.data;
});

export const logoutUser = createAsyncThunk('user/logout', async (_, { getState, dispatch }) => {
  const state = getState();
  const token = state.user.token;

  try {
    if (!token) {
      throw new Error('Token is not available');
    }

    await axios.patch(
      `${BASEURL}/users/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Если получили 401 ошибку, удаляем токен из состояния
      dispatch(clearUserState());
    } else {
      throw error;
    }
  }

  return {};
});

export const updateAvatar = createAsyncThunk('user/updateAvatar', async (avatarFile, { getState }) => {
  const token = getState().user.token;

  if (!token) {
    throw new Error('Token is not available');
  }

  const formData = new FormData();
  formData.append('avatar', avatarFile);

  const response = await axios.patch(
    `${BASEURL}/users/avatar`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearUserState: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        if (state.user) {
          state.user.avatarURL = action.payload.avatar;
        }
      });
  },
});

export const { clearUserState } = userSlice.actions;

export default userSlice.reducer;