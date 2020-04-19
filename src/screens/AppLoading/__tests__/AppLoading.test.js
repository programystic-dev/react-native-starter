import React from 'react';
import AppLoading from '../AppLoading';
import { shallow } from 'enzyme';

describe('AppLoading', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<AppLoading />);
    expect(wrapper).toMatchSnapshot();
  });
});
