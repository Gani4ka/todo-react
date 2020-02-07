import React from 'react';
import { shallow } from 'enzyme';
import { ItemAddForm, ItemAddFormProps } from './item-add-form';

describe('<ItemAddForm />', (): void => {
  const prop: ItemAddFormProps = {
    onItemAdded: () => {}
  };
  it('should render correctly', (): void => {
    const component = shallow(<ItemAddForm {...prop} />);
    expect(component.debug()).toMatchSnapshot();
  });

  it('should call handler', (): void => {
    const component = shallow(<ItemAddForm {...prop} />);
    component.find('.btn').simulate('click');
    expect(prop.onItemAdded).toBeCalled();
  });
});
