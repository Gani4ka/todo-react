/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './todo-list-item.css';
// eslint-disable-next-line import/no-cycle
import { TodoItemInterface } from '../app/app';

export interface TodoListItemProps extends Omit<TodoItemInterface, 'id'> {
  onDeleted: React.MouseEventHandler;
  onToggleImportant: React.MouseEventHandler;
  onToggleDone: React.MouseEventHandler;
}

export const TodoListItem = (props: TodoListItemProps): JSX.Element => {
  const {
    label,
    onDeleted,
    onToggleImportant,
    onToggleDone,
    important,
    done
  } = props;

  let classNames = 'todo-list-item';
  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }

  return (
    <span className={classNames}>
      <span className='todo-list-item-label' onClick={onToggleDone}>
        {label}
      </span>

      <button
        type='button'
        className='btn btn-outline-success btn-sm float-right'
        onClick={onToggleImportant}
      >
        <i className='fa fa-exclamation' />
      </button>

      <button
        type='button'
        className='btn btn-outline-danger btn-sm float-right'
        onClick={onDeleted}
      >
        <i className='fa fa-trash-o' />
      </button>
    </span>
  );
};
