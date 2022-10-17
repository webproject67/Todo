import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../utils/const';
import { UserData } from '../../types/state-type';
import { UserOuput, UsersOuput } from '../../types/user-type';
import {
  signUpAction,
  signInAction,
  signOutAction,
  checkAuthAction,
  getUsersAllAction,
  deleteUserAction,
} from '../api-actions';

const initialState: UserData = {
  user: {},
  users: [],
  selectUser: '',
  isLoaded: false,
  authorization: AuthorizationStatus.Unknown,
  countRequests: 0,
};

const userData = createSlice({
  name: NameSpace.UserData,
  initialState,
  reducers: {
    setSelectUser: (state, action) => {
      state.selectUser = action.payload;
    },
    resetSelectUser: (state) => {
      state.selectUser = '';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signUpAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(
        signUpAction.fulfilled,
        (state, action: PayloadAction<UserOuput>) => {
          state.isLoaded = false;
          state.authorization = AuthorizationStatus.Auth;
          state.user = action.payload;
        }
      )
      .addCase(signUpAction.rejected, (state) => {
        state.isLoaded = false;
        state.authorization = AuthorizationStatus.NoAuth;
      })
      .addCase(signInAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(
        signInAction.fulfilled,
        (state, action: PayloadAction<UserOuput>) => {
          state.isLoaded = false;
          state.authorization = AuthorizationStatus.Auth;
          state.user = action.payload;
        }
      )
      .addCase(signInAction.rejected, (state) => {
        state.isLoaded = false;
        state.authorization = AuthorizationStatus.NoAuth;
      })
      .addCase(signOutAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(signOutAction.fulfilled, (state) => {
        state.isLoaded = false;
        state.authorization = AuthorizationStatus.NoAuth;
      })
      .addCase(signOutAction.rejected, (state) => {
        state.isLoaded = false;
        state.authorization = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(
        checkAuthAction.fulfilled,
        (state, action: PayloadAction<UserOuput>) => {
          state.isLoaded = false;
          state.authorization = AuthorizationStatus.Auth;
          state.user = action.payload;
        }
      )
      .addCase(checkAuthAction.rejected, (state) => {
        state.isLoaded = false;
        state.authorization = AuthorizationStatus.NoAuth;
      })
      .addCase(getUsersAllAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(
        getUsersAllAction.fulfilled,
        (state, action: PayloadAction<UsersOuput>) => {
          state.isLoaded = false;
          state.users = action.payload;
        }
      )
      .addCase(getUsersAllAction.rejected, (state) => {
        state.isLoaded = false;
      })
      .addCase(deleteUserAction.pending, (state) => {
        state.isLoaded = true;
      })
      .addCase(deleteUserAction.fulfilled, (state) => {
        state.isLoaded = false;
        state.countRequests += 1;
      })
      .addCase(deleteUserAction.rejected, (state) => {
        state.isLoaded = false;
      });
  },
});

const { setSelectUser, resetSelectUser } = userData.actions;

export { userData, setSelectUser, resetSelectUser };
