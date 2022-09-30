import React from 'react';
import LayoutFullHeight from '../../components/layout-full-height';
import Header from '../../components/header';
import LayoutMain from '../../components/layout-main';
import TaskAddContainer from '../../containers/task-add';
import TaskListContainer from '../../containers/task-list';

function Main(): JSX.Element {
  return (
    <LayoutFullHeight>
      <Header />
      <LayoutMain>
        <TaskAddContainer />
        <TaskListContainer />
      </LayoutMain>
    </LayoutFullHeight>
  );
}

export default Main;
