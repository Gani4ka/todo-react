import React from 'react';
import { shallow } from 'enzyme';
import { TodoList, TodoListProps } from './todo-list';

describe('<TodoList />', (): void => {
  const props: TodoListProps = {
    todos: [
      {
        label: '1',
        important: false,
        done: false,
        id: 1
      },
      {
        label: '2',
        important: false,
        done: false,
        id: 2
      }
    ],
    onDeleted: jest.fn(),
    onToggleImportant: jest.fn(),
    onToggleDone: jest.fn()
  };

  it('should render correctly', (): void => {
    const component = shallow(<TodoList {...props} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('should render no items', (): void => {
    props.todos = [];
    const component = shallow(<TodoList {...props} />);
    expect(component.debug()).toMatchSnapshot();
  });
});
