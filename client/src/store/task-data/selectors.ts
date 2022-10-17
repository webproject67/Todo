import { NameSpace } from '../../utils/const';
import { State } from '../../types/state-type';
import { TasksOuput } from '../../types/task-type';

const getTasks = (state: State): TasksOuput => state[NameSpace.TaskData].tasks;

const getCountTasks = (state: State): number =>
  state[NameSpace.TaskData].countTasks;

const getLoading = (state: State): boolean =>
  state[NameSpace.TaskData].isLoaded;

const getCountRequests = (state: State): number =>
  state[NameSpace.TaskData].countRequests;

export { getTasks, getCountTasks, getLoading, getCountRequests };
