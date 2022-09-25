import React from 'react';
import Header from '../../components/header';
import LayoutMain from '../../components/layout-main';
import TaskAddContainer from '../../containers/task-add';
import TaskListContainer from '../../containers/task-list';

function Main(): JSX.Element {
  return (
    <>
      <Header />
      <LayoutMain>
        <TaskAddContainer />
        <TaskListContainer />
      </LayoutMain>
    </>
  );
}

export default Main;
