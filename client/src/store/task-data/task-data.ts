import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/const';
import { Task } from '../../types/state-type';
import {
  createTaskAction,
  getTasksAllAction,
  deleteTaskAction,
  updateTaskAction,
} from '../api-actions';
import { TasksAndCountAll } from '../../types/task-type';

const initialState: Task = {
  task: {
    rows: [],
    count: 0,
  },
  isLoaded: false,
  countUpdates: 0,
};

const taskData = createSlice({
  name: NameSpace.TaskData,
  initialState,
  reducers: {
    resetTasksAll: (state) => {
      state.task = {
        rows: [],
        count: 0,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createTaskAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(createTaskAction.fulfilled, (state) => {
        state.isLoaded = false;
        state.countUpdates += 1;
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
          state.task = action.payload;
          state.isLoaded = false;
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
        state.countUpdates += 1;
      })
      .addCase(deleteTaskAction.rejected, (state) => {
        state.isLoaded = false;
      })
      .addCase(updateTaskAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(updateTaskAction.fulfilled, (state) => {
        state.isLoaded = false;
        state.countUpdates += 1;
      })
      .addCase(updateTaskAction.rejected, (state) => {
        state.isLoaded = false;
      });
  },
});

const { resetTasksAll } = taskData.actions;

export { taskData, resetTasksAll };
