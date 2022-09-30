import React from 'react';
import LayoutFullHeight from '../../components/layout-full-height';
import Header from '../../components/header';
import LayoutMain from '../../components/layout-main';
import UserSelectContainer from '../../containers/user-select';
import TaskListContainer from '../../containers/task-list';

function Dashboard(): JSX.Element {
  return (
    <LayoutFullHeight>
      <Header />
      <LayoutMain>
        <UserSelectContainer />
        <TaskListContainer />
      </LayoutMain>
    </LayoutFullHeight>
  );
}

export default Dashboard;
