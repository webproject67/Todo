import React from 'react';
import { AppRoute } from '../../utils/const';
import Protected from '../../containers/protected';
import LayoutFullHeight from '../../components/layout-full-height';
import Header from '../../containers/header';
import LayoutMain from '../../components/layout-main';
import UserSelectContainer from '../../containers/user-select';
import TaskListContainer from '../../containers/task-list';

function Dashboard(): JSX.Element {
  return (
    <Protected redirect={AppRoute.SignIn}>
      <LayoutFullHeight>
        <Header />
        <LayoutMain>
          <UserSelectContainer />
          <TaskListContainer />
        </LayoutMain>
      </LayoutFullHeight>
    </Protected>
  );
}

export default Dashboard;
