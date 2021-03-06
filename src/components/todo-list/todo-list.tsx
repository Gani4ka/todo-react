import React from 'react';
// eslint-disable-next-line import/no-cycle
import TodoListItem from '../todo-list-item';
import './todo-list.css';
import { TodoItemInterface } from '../utils/reducer';

export interface TodoListProps {
  todos: TodoItemInterface[];
  onDeleted: Function;
  onToggleImportant: Function;
  onToggleDone: Function;
}

export const TodoList = ({
  todos,
  onDeleted,
  onToggleImportant,
  onToggleDone
}: TodoListProps): JSX.Element => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} id={id} className='list-group-item'>
        <TodoListItem
          {...itemProps}
          onDeleted={(): React.MouseEventHandler => onDeleted(id)}
          onToggleImportant={(): React.MouseEventHandler =>
            onToggleImportant(id)
          }
          onToggleDone={(): React.MouseEventHandler => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className='list-group todo-list'>{elements}</ul>;
};
