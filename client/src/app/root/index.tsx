import React from 'react';
import Header from '../../components/header';
import LayoutMain from '../../components/layout-main';
import TaskAdd from '../../components/task-add';
import TaskList from '../../components/task-list';

function Main(): JSX.Element {
  return (
    <>
      <Header />
      <LayoutMain>
        <TaskAdd />
        <TaskList />
      </LayoutMain>
    </>
  );
}

export default Main;
