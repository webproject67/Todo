import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';
import { saveToken, dropToken } from '../services/token';
import { UserInput, UserCreate, UsersAndCountAll } from '../types/user-type';
import { TasksAndCountAll } from '../types/task-type';

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

const getUsersAllAction = createAsyncThunk<UsersAndCountAll, undefined>(
  'users/getAll',
  async () => {
    const { data } = await api.get<UsersAndCountAll>('users');

    return data;
  }
);

const deleteUserAction = createAsyncThunk<void, { uuid: string }>(
  'users/delete',
  async (params) => {
    await api.delete(`users?uuid=${params.uuid}`);
  }
);

const checkAuthAction = createAsyncThunk<UserCreate, undefined>(
  'refreshToken',
  async () => {
    const { data } = await api.get<UserCreate>('tokens');
    saveToken(data.token.accessToken);

    return data;
  }
);

const createTaskAction = createAsyncThunk<
  void,
  { UserUuid: string; task: string }
>('tasks/create', async (payload) => {
  await api.post<UserCreate>('tasks/', payload);
});

const getTasksAllAction = createAsyncThunk<
  TasksAndCountAll,
  { UserUuid: string }
>('tasks/getAll', async (params) => {
  const { data } = await api.get<TasksAndCountAll>(
    `tasks?UserUuid=${params.UserUuid}`
  );

  return data;
});

const deleteTaskAction = createAsyncThunk<void, { uuid: string }>(
  'tasks/delete',
  async (params) => {
    await api.delete(`tasks?uuid=${params.uuid}`);
  }
);

const updateTaskAction = createAsyncThunk<
  void,
  { uuid: string; isClosed: boolean }
>('tasks/update', async (params) => {
  await api.put(`tasks?uuid=${params.uuid}&isClosed=${params.isClosed}`);
});

export {
  signUpAction,
  signInAction,
  signOutAction,
  getUsersAllAction,
  deleteUserAction,
  checkAuthAction,
  createTaskAction,
  getTasksAllAction,
  deleteTaskAction,
  updateTaskAction,
};
