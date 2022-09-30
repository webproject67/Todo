import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/const';
import userData from './user-data/user-data';

const rootReducer = combineReducers({
  [NameSpace.UserData]: userData.reducer,
});

export default rootReducer;
