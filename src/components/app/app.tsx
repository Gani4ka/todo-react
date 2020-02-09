import React, { useState } from 'react';
import AppHeader from '../app-header';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.css';

export interface TodoItemInterface {
  label: string;
  important: boolean;
  done: boolean;
  id: string;
}

export const App = (): JSX.Element => {
  const initialState: TodoItemInterface[] = [
    {
      label: '1',
      important: false,
      done: false,
      id: 'i1'
    },
    {
      label: '2',
      important: false,
      done: false,
      id: 'i2'
    },
    {
      label: '3',
      important: false,
      done: false,
      id: 'i3'
    }
  ];

  const [todoData, setTodoData] = useState(initialState);

  const createTodoItem = (label: string): TodoItemInterface => {
    return {
      label,
      important: false,
      done: false,
      id: Math.random().toString()
    };
  };

  const addItem = (text: string): void => {
    const newItem = createTodoItem(text);
    setTodoData([...todoData, newItem]);
  };

  const deleteItem = (id: string): void => {
    const idx = todoData.findIndex(el => el.id.toString() === id.toString());

    const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

    setTodoData(newArray);
  };

  const toggleImportant = (id: string): void => {
    const idx = todoData.findIndex(el => el.id.toString() === id.toString());
    const oldItem = todoData[idx];
    const newItem = { ...oldItem, important: !oldItem.important };
    setTodoData([
      ...todoData.slice(0, idx),
      newItem,
      ...todoData.slice(idx + 1)
    ]);
  };

  const toggleDone = (id: string): void => {
    const idx = todoData.findIndex(el => el.id.toString() === id.toString());
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
