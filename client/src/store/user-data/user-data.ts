import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, Role } from '../../utils/const';
import { User } from '../../types/state-type';
import {
  signUpAction,
  signInAction,
  signOutAction,
  checkAuthAction,
} from '../api-actions';
import { UserCreate } from '../../types/user-type';

const initialState: User = {
  user: {
    candidate: {
      uuid: '',
      email: '',
      password: '',
      id: 0,
      role: Role.User,
      isActivated: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    token: {
      accessToken: '',
      refreshToken: '',
    },
  },
  isLoaded: false,
  isAuthorization: false,
};

const user = createSlice({
  name: NameSpace.UserData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signUpAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(
        signUpAction.fulfilled,
        (state, action: PayloadAction<UserCreate>) => {
          state.user = action.payload;
          state.isLoaded = false;
          state.isAuthorization = true;
        }
      )
      .addCase(signUpAction.rejected, (state) => {
        state.isLoaded = false;
        state.isAuthorization = false;
      })
      .addCase(signInAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(
        signInAction.fulfilled,
        (state, action: PayloadAction<UserCreate>) => {
          state.user = action.payload;
          state.isLoaded = false;
          state.isAuthorization = true;
        }
      )
      .addCase(signInAction.rejected, (state) => {
        state.isLoaded = false;
        state.isAuthorization = false;
      })
      .addCase(signOutAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(signOutAction.fulfilled, (state) => {
        state.isLoaded = false;
        state.isAuthorization = false;
      })
      .addCase(signOutAction.rejected, (state) => {
        state.isLoaded = false;
        state.isAuthorization = true;
      })
      .addCase(checkAuthAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(
        checkAuthAction.fulfilled,
        (state, action: PayloadAction<UserCreate>) => {
          state.user = action.payload;
          state.isLoaded = false;
          state.isAuthorization = true;
        }
      )
      .addCase(checkAuthAction.rejected, (state) => {
        state.isLoaded = false;
        state.isAuthorization = false;
      });
  },
});

export default user;
