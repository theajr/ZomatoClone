import React from 'react';
import { shallow } from 'enzyme';
import SortByRating from './SortByRating';

describe('<SortByRating />', () => {
  test('renders', () => {
    const wrapper = shallow(<SortByRating />);
    expect(wrapper).toMatchSnapshot();
  });
});
