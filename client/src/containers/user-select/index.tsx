import React, { useState } from 'react';
import UserSelect from '../../components/user-select';
import { OnChangeType } from '../../types/event-type';

function UserSelectContainer(): JSX.Element {
  const [data, setData] = useState({
    email: '',
  });

  const onChange: OnChangeType = (name, value) => {
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return <UserSelect name="email" data={data} onChange={onChange} />;
}

export default UserSelectContainer;
