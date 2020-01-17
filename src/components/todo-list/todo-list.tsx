import React from 'react';
// import TodoListItem from '../todo-list-item';
import './todo-list.css';

interface TodoListProps {
  todos: Array<Record<string, any>>;
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
      <li key={id} className='list-group-item'>
        {/* <TodoListItem
          {...itemProps }
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        /> */}
      </li>
    );
  });

  return <ul className='list-group todo-list'>{elements}</ul>;
};
