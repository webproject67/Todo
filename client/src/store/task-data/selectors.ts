import { NameSpace } from '../../utils/const';
import { State } from '../../types/state-type';
import { TasksAll } from '../../types/task-type';

const getCount = (state: State): number => state[NameSpace.TaskData].task.count;

const getTasks = (state: State): TasksAll =>
  state[NameSpace.TaskData].task.rows;

const getLoaded = (state: State): boolean => state[NameSpace.TaskData].isLoaded;

const getCountUpdates = (state: State): number =>
  state[NameSpace.TaskData].countUpdates;

export { getCount, getTasks, getLoaded, getCountUpdates };
