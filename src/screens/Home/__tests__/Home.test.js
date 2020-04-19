import React from 'react';
import Home from '../Home';
import { shallow } from 'enzyme';

describe('Home', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
