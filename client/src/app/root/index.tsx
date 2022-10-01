import React from 'react';
import { AppRoute } from '../../utils/const';
import Protected from '../../containers/protected';
import LayoutFullHeight from '../../components/layout-full-height';
import Header from '../../containers/header';
import LayoutMain from '../../components/layout-main';
import TaskAddContainer from '../../containers/task-add';
import TaskListContainer from '../../containers/task-list';

function Main(): JSX.Element {
  return (
    <Protected redirect={AppRoute.SignIn}>
      <LayoutFullHeight>
        <Header />
        <LayoutMain>
          <TaskAddContainer />
          <TaskListContainer />
        </LayoutMain>
      </LayoutFullHeight>
    </Protected>
  );
}

export default Main;
