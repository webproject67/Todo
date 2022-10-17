import React from 'react';
import { cn as bem } from '@bem-react/classname';
import { useLocation } from 'react-router-dom';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import Select from '../select';
import Button from '../button';
import convertDate from '../../utils/convert-date';
import { AppRoute, NameTextField } from '../../utils/const';
import { TaskOuput } from '../../types/task-type';
import { OnChangeType } from '../../types/event-type';
import './style.scss';

interface ITaskList {
  tasks: TaskOuput[];
  countTasks: number;
  name: NameTextField.Priority;
  priorities: {
    value: string;
    text: string;
  }[];
  id: NameTextField.Priority;
  label: string;
  onChange: OnChangeType;
  onClickClose: (task: TaskOuput) => void;
  onClickDelete: (task: TaskOuput) => void;
}

function TaskList({
  tasks,
  countTasks,
  name,
  priorities,
  id,
  label,
  onChange,
  onClickClose,
  onClickDelete,
}: ITaskList): JSX.Element {
  const cn = bem('TaskList');
  const location = useLocation();
  const isRoot = location.pathname === AppRoute.Root;

  const handleChange = (
    returnValue: string,
    returnName: NameTextField,
    uuid: string
  ): void => onChange(returnValue, returnName, uuid);

  return (
    <div className={cn()}>
      <h2 className={cn('title')}>Список дел:</h2>
      {countTasks ? (
        <ul className={cn('list')}>
          {tasks.map((elem, i) => (
            <li className={cn('item')} key={elem.uuid}>
              <div className={cn('texts')}>
                <p className={cn('text', { underlined: elem.isClosed })}>
                  {i + 1}. {elem.text}
                </p>
                <p className={cn('date')}>
                  Добавлено: {convertDate(elem.createdAt)}
                </p>
                <p className={cn('date')}>
                  Обновлено: {convertDate(elem.updatedAt)}
                </p>
              </div>
              {isRoot ? (
                <div className={cn('btns')}>
                  <div className={cn('select')}>
                    <Select
                      name={name}
                      options={priorities}
                      value={String(elem.priority)}
                      id={id}
                      label={label}
                      onChange={(returnValue, returnName) =>
                        handleChange(returnValue, returnName, elem.uuid)
                      }
                    />
                  </div>
                  <div className={cn('btn')}>
                    <Button onClick={() => onClickClose(elem)}>
                      {elem.isClosed ? <TaskAltIcon /> : <CloseIcon />}
                    </Button>
                  </div>
                  <div className={cn('btn')}>
                    <Button onClick={() => onClickDelete(elem)}>
                      <DeleteIcon />
                    </Button>
                  </div>
                </div>
              ) : (
                <span>{priorities[elem.priority - 1].text}</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <h3 className={cn('title')}>Пусто!</h3>
      )}
    </div>
  );
}

export default TaskList;
