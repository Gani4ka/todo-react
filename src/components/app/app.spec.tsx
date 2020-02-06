import React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './app';
import { ItemAddForm } from '../item-add-form/item-add-form';
import { TodoList } from '../todo-list/todo-list';
import {
  TodoListItem,
  TodoListItemProps
} from '../todo-list-item/todo-list-item';

describe('<App />', (): void => {
  it('should render correctly', (): void => {
    const component = shallow(<App />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('should render correctly2', (): void => {
    const component = mount(<App />);
    expect(component.debug()).toMatchSnapshot();
  });
});

describe('<App functions/>', (): void => {
  it('addItem should add item', (): void => {
    const component = mount(<App />);
    const form = component.find(ItemAddForm);
    form.simulate('submit');

    expect(component.find('.list-group').children()).toHaveLength(4);
  });

  it('deleteItem should delete item', (): void => {
    const component = mount(<App />);
    component
      .find('.btn-outline-danger')
      .first()
      .simulate('click');

    expect(component.find('.list-group').children()).toHaveLength(2);
  });

  it('toggleImportant should toggle prop important', (): void => {
    const component = mount(<App />);

    component
      .find('.btn-outline-success')
      .first()
      .simulate('click');

    expect(
      component
        .find(TodoListItem)
        .first()
        .prop('important')
    ).toEqual(true);
  });
});
