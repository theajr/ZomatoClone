import React from 'react';
import { shallow } from 'enzyme';
import RestaurantListView from './RestaurantListView';

describe('<RestaurantListView />', () => {
  test('renders loader', () => {
    const wrapper = shallow(<RestaurantListView loading />);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders list', () => {
    const wrapper = shallow(<RestaurantListView restaurants={[{}]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
