import React from 'react';
import { shallow, mount } from 'enzyme';
import { App } from './app';

// may we mock id?

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
    const form = component.find('ItemAddForm');
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
        .find('TodoListItem')
        .first()
        .prop('important')
    ).toEqual(true);
  });

  it('toggleDone should toggle prop done (id)', (): void => {
    const component = mount(<App />);
    component.find('#i2 .todo-list-item-label').simulate('click');

    expect(component.find('li#i2 TodoListItem').prop('done')).toEqual(true);
  });

  it('done and count initial', (): void => {
    const component = shallow(<App />);

    expect(component.find('AppHeader').prop('done')).toEqual(0);
    expect(component.find('AppHeader').prop('toDo')).toEqual(3);
  });

  it('done and count change', (): void => {
    const component = mount(<App />);

    component.find('#i2 .todo-list-item-label').simulate('click');

    expect(component.find('AppHeader').prop('done')).toEqual(1);
    expect(component.find('AppHeader').prop('toDo')).toEqual(2);
  });

  it('done and count change2', (): void => {
    const component = mount(<App />);

    component
      .find('.btn-outline-danger')
      .first()
      .simulate('click');

    component
      .find('.btn-outline-danger')
      .first()
      .simulate('click');

    expect(component.find('AppHeader').prop('done')).toEqual(0);
    expect(component.find('AppHeader').prop('toDo')).toEqual(1);
  });
});
