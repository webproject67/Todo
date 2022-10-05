import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/const';
import { userProcess } from './user-process/user-process';
import userData from './user-data/user-data';
import { taskData } from './task-data/task-data';

const rootReducer = combineReducers({
  [NameSpace.UserProcess]: userProcess.reducer,
  [NameSpace.UserData]: userData.reducer,
  [NameSpace.TaskData]: taskData.reducer,
});

export default rootReducer;
