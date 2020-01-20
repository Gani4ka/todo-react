import React, { useState } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export const App = (): JSX.Element => {
  const [todoData, setTodoData] = useState([
    {
      label: '1',
      important: false,
      done: false,
      id: Math.random()
    },
    {
      label: '2',
      important: false,
      done: false,
      id: Math.random()
    },
    {
      label: '3',
      important: false,
      done: false,
      id: Math.random()
    }
  ]);

  const createTodoItem = (
    label: string
  ): {
    label: string;
    important: boolean;
    done: boolean;
    id: number;
  } => {
    return {
      label,
      important: false,
      done: false,
      id: Math.random()
    };
  };

  const addItem = (text: string): void => {
    const newItem = createTodoItem(text);
    setTodoData([...todoData, newItem]);
  };

  const deleteItem = (id: number): void => {
    const idx = todoData.findIndex(el => el.id === id);

    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

    setTodoData(newArray);
  };

  const toggleImportant = (id: number): void => {
    const idx = todoData.findIndex(el => el.id === id);
    const oldItem = todoData[idx];
    const newItem = { ...oldItem, important: !oldItem.important };
    setTodoData([
      ...todoData.slice(0, idx),
      newItem,
      ...todoData.slice(idx + 1)
    ]);
  };

  const toggleDone = (id: number): void => {
    const idx = todoData.findIndex(el => el.id === id);
    const oldItem = todoData[idx];
    const newItem = { ...oldItem, done: !oldItem.done };
    setTodoData([
      ...todoData.slice(0, idx),
      newItem,
      ...todoData.slice(idx + 1)
    ]);
  };

  const doneCount = todoData.filter(el => el.done).length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className='todo-app'>
      <AppHeader toDo={todoCount} done={doneCount} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList
        todos={todoData}
        onDeleted={deleteItem}
        onToggleImportant={toggleImportant}
        onToggleDone={toggleDone}
      />

      <ItemAddForm onItemAdded={addItem} />
    </div>
  );
};
