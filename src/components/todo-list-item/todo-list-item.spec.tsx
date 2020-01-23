import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem, TodoListItemProps } from './todo-list-item';

describe('<TodoListItem />', (): void => {
  it('should render correctly', (): void => {
    const props: TodoListItemProps = {
      label: 'text',
      onDeleted: jest.fn(),
      onToggleImportant: jest.fn(),
      onToggleDone: jest.fn(),
      important: false,
      done: false
    };
    const component = shallow(<TodoListItem {...props} />);
    expect(component.debug()).toMatchSnapshot();
    // expect(component).toMatchSnapshot();
  });
});
