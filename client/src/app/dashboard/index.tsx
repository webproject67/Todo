import React from 'react';
import Header from '../../components/header';
import LayoutMain from '../../components/layout-main';
import UserSelectContainer from '../../containers/user-select';
import TaskListContainer from '../../containers/task-list';

function Dashboard(): JSX.Element {
  return (
    <>
      <Header />
      <LayoutMain>
        <UserSelectContainer />
        <TaskListContainer />
      </LayoutMain>
    </>
  );
}

export default Dashboard;
