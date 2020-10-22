import React from 'react';
import { shallow } from 'enzyme';
import SearchSideBar from './SearchSideBar';

describe('<SearchSideBar />', () => {
  test('renders', () => {
    const wrapper = shallow(<SearchSideBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
