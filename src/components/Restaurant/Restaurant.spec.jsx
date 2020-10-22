import React from 'react';
import { shallow } from 'enzyme';
import Restaurant from './Restaurant';

describe('<Restaurant />', () => {
  test('renders', () => {
    const wrapper = shallow(
      <Restaurant
        restaurant={{
          cuisines: ['Tea'],
          featured_image: 'a.png',
          location: { locality: 'Hyd' },
          user_rating: { aggregate_rating: '3.4' },
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
