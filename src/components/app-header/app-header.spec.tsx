import React from 'react';
import { shallow } from 'enzyme';
import AppHeader, { AppHeaderProps } from './app-header';

describe('<AppHeader />', (): void => {
  const props: AppHeaderProps = {
    done: 1,
    toDo: 1
  };
  it('should render corectly', (): void => {
    const component = shallow(<AppHeader {...props} />);

    expect(component.debug()).toMatchSnapshot();
  });

  it('should render props', (): void => {
    props.done = 6;
    props.toDo = 3;
    const component = shallow(<AppHeader {...props} />);

    expect(component.find('h2').text()).toEqual(
      `${props.toDo} more to do, ${props.done} done`
    );
  });
});
