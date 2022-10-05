import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../utils/const';
import { UserProcess } from '../../types/state-type';

const initialState: UserProcess = {
  email: '',
};

const userProcess = createSlice({
  name: NameSpace.UserProcess,
  initialState,
  reducers: {
    selectEmail: (state, action) => {
      state.email = action.payload;
    },
    resetEmail: (state) => {
      state.email = '';
    },
  },
});

const { selectEmail, resetEmail } = userProcess.actions;

export { userProcess, selectEmail, resetEmail };
