import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';
import { saveToken, dropToken } from '../services/token';
import { UserInput, UserCreate } from '../types/user-type';

const signUpAction = createAsyncThunk<UserCreate, UserInput>(
  'user/signup',
  async (payload) => {
    const { data } = await api.post<UserCreate>('users/', payload);
    saveToken(data.token.accessToken);

    return data;
  }
);

const signInAction = createAsyncThunk<UserCreate, UserInput>(
  'user/signin',
  async (payload) => {
    const { data } = await api.post<UserCreate>('users/sign', payload);
    saveToken(data.token.accessToken);

    return data;
  }
);

const signOutAction = createAsyncThunk<void, undefined>(
  'user/signout',
  async () => {
    await api.delete('users/sign');
    dropToken();
  }
);

export { signUpAction, signInAction, signOutAction };
