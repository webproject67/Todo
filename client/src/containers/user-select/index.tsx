import React, { useEffect } from 'react';
import UserSelect from '../../components/user-select';
import { NameTextField } from '../../utils/const';
import { OnChangeType } from '../../types/event-type';
import { UserOuput } from '../../types/user-type';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {
  getCandidate,
  getCandidates,
  getSelectUser,
  getCountRequests,
} from '../../store/user-data/selectors';
import {
  setSelectUser,
  resetSelectUser,
} from '../../store/user-data/user-data';
import { getUsersAllAction, deleteUserAction } from '../../store/api-actions';

interface ICallbacks {
  onChange: OnChangeType;
  onClick: () => void;
}

function UserSelectContainer(): JSX.Element {
  const { uuid, role } = useAppSelector(getCandidate) as UserOuput;
  const candidates = useAppSelector(getCandidates);
  const countRequests = useAppSelector(getCountRequests);
  const selectUser = useAppSelector(getSelectUser);
  const dispatch = useAppDispatch();

  const callbacks: ICallbacks = {
    onChange: (value) => {
      dispatch(setSelectUser(value));
    },
    onClick: () => {
      dispatch(deleteUserAction(selectUser));
      dispatch(resetSelectUser());
    },
  };

  useEffect(() => {
    if (uuid) dispatch(getUsersAllAction());

    return () => {
      dispatch(resetSelectUser());
    };
  }, [dispatch, uuid, countRequests]);

  return (
    <UserSelect
      role={role}
      name={NameTextField.Email}
      candidates={candidates}
      value={selectUser}
      id={NameTextField.Email}
      label="Пользователь"
      onChange={callbacks.onChange}
      onClick={callbacks.onClick}
    />
  );
}

export default UserSelectContainer;
