import React, { useState } from 'react';
import Auth from '../../components/auth';
import { OnChangeType, OnSubmitType } from '../../types/event-type';

interface ICallbacks {
  onChange: OnChangeType;
  onSubmit: OnSubmitType;
}

function AuthContainer(): JSX.Element {
  const [data, setData] = useState({
    login: '',
    password: '',
  });

  const callbacks: ICallbacks = {
    onChange: (name, value) => {
      setData((prevData) => ({ ...prevData, [name]: value }));
    },
    onSubmit: (evt) => {
      evt.preventDefault();
    },
  };

  return <Auth data={data} events={callbacks} />;
}

export default AuthContainer;
