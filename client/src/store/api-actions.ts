import { createAsyncThunk } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';
import api from '../services/api';
import { saveToken, dropToken } from '../services/token';
import { UserInput, UserOuput, UsersOuput } from '../types/user-type';
import {
  TaskCreateInput,
  TaskDeleteInput,
  TaskUpdateInput,
  TasksAndCountAll,
} from '../types/task-type';

const signUpAction = createAsyncThunk<UserOuput, UserInput>(
  'user/signup',
  async (payload) => {
    const { data } = await api.post<string>('users', payload);
    saveToken(data);

    return jwtDecode(data);
  }
);

const signInAction = createAsyncThunk<UserOuput, UserInput>(
  'user/signin',
  async (payload) => {
    const { data } = await api.post<string>('users/sign', payload);
    saveToken(data);

    return jwtDecode(data);
  }
);

const signOutAction = createAsyncThunk<void, undefined>(
  'user/signout',
  async () => {
    await api.delete('users/sign');
    dropToken();
  }
);

const checkAuthAction = createAsyncThunk<UserOuput, undefined>(
  'user/checkAuth',
  async () => {
    const { data } = await api.get<string>('users/checkAuth');
    saveToken(data);

    return jwtDecode(data);
  }
);

const getUsersAllAction = createAsyncThunk<UsersOuput, undefined>(
  'user/getUsersAll',
  async () => {
    const { data } = await api.get<UsersOuput>('users');

    return data;
  }
);

const deleteUserAction = createAsyncThunk<void, string>(
  'user/deleteUser',
  async (params) => {
    await api.delete(`users?uuid=${params}`);
  }
);

const createTaskAction = createAsyncThunk<void, TaskCreateInput>(
  'tasks/createTask',
  async (payload) => {
    await api.post('tasks', payload);
  }
);

const getTasksAllAction = createAsyncThunk<TasksAndCountAll, string>(
  'tasks/getTasksAll',
  async (params) => {
    const { data } = await api.get<TasksAndCountAll>(
      `tasks?UserUuid=${params}`
    );

    return data;
  }
);

const deleteTaskAction = createAsyncThunk<void, TaskDeleteInput>(
  'tasks/deleteTask',
  async (params) => {
    await api.delete(`tasks?UserUuid=${params.UserUuid}&uuid=${params.uuid}`);
  }
);

const updateTaskAction = createAsyncThunk<void, TaskUpdateInput>(
  'tasks/updateTask',
  async (params) => {
    await api.put(
      `tasks?UserUuid=${params.UserUuid}&uuid=${params.uuid}&isClosed=${params.isClosed}&priority=${params.priority}`
    );
  }
);

export {
  signUpAction,
  signInAction,
  signOutAction,
  checkAuthAction,
  getUsersAllAction,
  deleteUserAction,
  createTaskAction,
  getTasksAllAction,
  deleteTaskAction,
  updateTaskAction,
};
