import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/const';
import { TaskData } from '../../types/state-type';
import { TasksAndCountAll } from '../../types/task-type';
import {
  createTaskAction,
  getTasksAllAction,
  deleteTaskAction,
  updateTaskAction,
} from '../api-actions';

const initialState: TaskData = {
  tasks: [],
  countTasks: 0,
  isLoaded: false,
  countRequests: 0,
};

const taskData = createSlice({
  name: NameSpace.TaskData,
  initialState,
  reducers: {
    resetTasksAll: (state) => {
      state.tasks = [];
      state.countTasks = 0;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createTaskAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(createTaskAction.fulfilled, (state) => {
        state.isLoaded = false;
        state.countRequests += 1;
      })
      .addCase(createTaskAction.rejected, (state) => {
        state.isLoaded = false;
      })
      .addCase(getTasksAllAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(
        getTasksAllAction.fulfilled,
        (state, action: PayloadAction<TasksAndCountAll>) => {
          state.isLoaded = false;
          state.tasks = action.payload.rows;
          state.countTasks = action.payload.count;
        }
      )
      .addCase(getTasksAllAction.rejected, (state) => {
        state.isLoaded = false;
      })
      .addCase(deleteTaskAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(deleteTaskAction.fulfilled, (state) => {
        state.isLoaded = false;
        state.countRequests += 1;
      })
      .addCase(deleteTaskAction.rejected, (state) => {
        state.isLoaded = false;
      })
      .addCase(updateTaskAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(updateTaskAction.fulfilled, (state) => {
        state.isLoaded = false;
        state.countRequests += 1;
      })
      .addCase(updateTaskAction.rejected, (state) => {
        state.isLoaded = false;
      });
  },
});

const { resetTasksAll } = taskData.actions;

export { taskData, resetTasksAll };
