import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
// import ItemStatusFilter from '../item-status-filter';
// import ItemAddForm from '../item-add-form';

import './app.css';

export const App = (): JSX.Element => {
  const foo = (): void => {
    console.log('foo');
  };

  return (
    <div className='todo-app'>
      <AppHeader toDo={4} done={1} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        {/* <ItemStatusFilter /> */}
      </div>

      <TodoList
        todos={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        onDeleted={foo}
        onToggleImportant={foo}
        onToggleDone={foo}
      />

      {/* <ItemAddForm onItemAdded={this.addItem}/> */}
    </div>
  );
};
