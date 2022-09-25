import React from 'react';
import { cn as bem } from '@bem-react/classname';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '../button';
import tasks from '../../utils/mocks/tasks';
import convertDate from '../../utils/convert-date';
import './style.scss';

interface ITaskList {
  onClick: () => void;
}

function TaskList({ onClick }: ITaskList): JSX.Element {
  const cn = bem('TaskList');

  return (
    <div className={cn()}>
      <h2 className={cn('title')}>Список дел:</h2>
      <ul className={cn('list')}>
        {tasks.rows.map((elem, i) => (
          <li className={cn('item')} key={elem.uuid}>
            <div className={cn('texts')}>
              <p className={cn('text', { underlined: elem.isClosed })}>
                {i + 1}. {elem.task}
              </p>
              <p className={cn('date')}>
                Добавлено: {convertDate(elem.createdAt)}
              </p>
              <p className={cn('date')}>
                Обновлено: {convertDate(elem.updatedAt)}
              </p>
            </div>
            <div className={cn('btns')}>
              <span className={cn('btn')}>
                <Button onClick={onClick}>
                  {elem.isClosed ? <TaskAltIcon /> : <CloseIcon />}
                </Button>
              </span>
              <span className={cn('btn')}>
                <Button onClick={onClick}>
                  <DeleteIcon />
                </Button>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
