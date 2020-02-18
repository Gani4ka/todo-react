import React, { useReducer, useMemo } from 'react';
import reducer, { TodoItemInterface } from '../utils/reducer';
import AppHeader from '../app-header';
// eslint-disable-next-line import/no-cycle
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.css';

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

export const App = (): JSX.Element => {
  const [todoData, dispatch] = useReducer(reducer, initialState);

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
    dispatch({ type: 'addItem', payload: newItem });
  };

  const deleteItem = (id: string): void => {
    dispatch({ type: 'deleteItem', payload: id });
  };

  const toggleImportant = (id: string): void => {
    dispatch({ type: 'toggleImportant', payload: id });
  };

  const toggleDone = (id: string): void => {
    dispatch({ type: 'toggleDone', payload: id });
  };

  const doneCount = useMemo(() => {
    const numberOfItemsTodo = todoData.filter(
      (el: TodoItemInterface) => el.done
    ).length;
    return numberOfItemsTodo;
  }, [
    todoData.length,
    todoData.filter((el: TodoItemInterface) => el.done).length
  ]);

  const todoCount = useMemo(() => todoData.length - doneCount, [
    todoData.length,
    doneCount
  ]);

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

// useCalback
// tests
