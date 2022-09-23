import React from 'react';
import Header from '../../components/header';
import LayoutMain from '../../components/layout-main';
import UserSelect from '../../components/user-select';
import TaskList from '../../components/task-list';

function Dashboard(): JSX.Element {
  return (
    <>
      <Header />
      <LayoutMain>
        <UserSelect />
        <TaskList />
      </LayoutMain>
    </>
  );
}

export default Dashboard;
