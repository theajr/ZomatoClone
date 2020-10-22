import React from 'react';
import { shallow } from 'enzyme';
import RestaurantSearch from './RestaurantSearch';

describe('<RestaurantSearch />', () => {
  test('renders', () => {
    const wrapper = shallow(<RestaurantSearch />);
    expect(wrapper).toMatchSnapshot();
  });
});
