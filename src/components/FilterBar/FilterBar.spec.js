import React from 'react';
import { shallow } from 'enzyme';
import FilterBar from './FilterBar';

describe('<FilterBar />', () => {
  test('renders', () => {
    const wrapper = shallow(<FilterBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
