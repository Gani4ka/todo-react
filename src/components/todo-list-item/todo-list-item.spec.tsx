import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem, TodoListItemProps } from './todo-list-item';

describe('<TodoListItem />', (): void => {
  const props: TodoListItemProps = {
    label: 'text',
    onDeleted: jest.fn(),
    onToggleImportant: jest.fn(),
    onToggleDone: jest.fn(),
    important: false,
    done: false
  };

  it('should render correctly', (): void => {
    const component = shallow(<TodoListItem {...props} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('should render important and done class', (): void => {
    props.important = true;
    props.done = true;
    const component = shallow(<TodoListItem {...props} />);
    expect(component.debug()).toMatchSnapshot();
    component.hasClass('important');
    component.hasClass('done');
  });

  it('should call onDeleted func', (): void => {
    const component = shallow(<TodoListItem {...props} />);
    component.find('.btn-outline-danger').simulate('click');
    expect(props.onDeleted).toBeCalled();
  });

  it('should call onToggleImportant func', (): void => {
    const component = shallow(<TodoListItem {...props} />);
    component.find('.btn-outline-success').simulate('click');
    expect(props.onToggleImportant).toBeCalled();
  });

  it('should call onToggleImportant func', (): void => {
    const component = shallow(<TodoListItem {...props} />);
    component
      .find('.btn-outline-success')
      .simulate('beforeload', props.onToggleImportant); // 2 errors wtf???
    expect(props.onDeleted).toHaveBeenCalledTimes(1);
  });
});
