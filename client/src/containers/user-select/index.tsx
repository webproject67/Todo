import React, { useEffect } from 'react';
import getSelectEmail from '../../store/user-process/selectors';
import { selectEmail, resetEmail } from '../../store/user-process/user-process';
import UserSelect from '../../components/user-select';
import { OnChangeType } from '../../types/event-type';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getCandidates } from '../../store/user-data/selectors';
import { deleteUserAction, getUsersAllAction } from '../../store/api-actions';

function UserSelectContainer(): JSX.Element {
  const dispatch = useAppDispatch();
  const candidates = useAppSelector(getCandidates);

  const email = useAppSelector(getSelectEmail);

  const onChange: OnChangeType = (value) => {
    dispatch(selectEmail(value));
  };

  const onClick = (): void => {
    dispatch(deleteUserAction({ uuid: email }));
    dispatch(resetEmail());
  };

  useEffect(() => {
    dispatch(getUsersAllAction());
  }, [dispatch, email]);

  return (
    <UserSelect
      name="email"
      candidates={candidates}
      value={email}
      onChange={onChange}
      onClick={onClick}
    />
  );
}

export default UserSelectContainer;
