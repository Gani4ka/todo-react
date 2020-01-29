import React from 'react';
import { shallow } from 'enzyme';
import { App } from './app';

describe('<App />', (): void => {
  it('should render correctly', (): void => {
    const component = shallow(<App />);
    expect(component.debug()).toMatchSnapshot();
  });
});
