import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Location from './Location';

const mockOnCick = jest.fn();

describe('<Location />', () => {
  test('renders', () => {
    const location = {
      name: 'Lorem',
      country_flag_url: 'India.png',
      country_name: 'India',
    };
    const { getByRole, getByText, getByAltText } = render(
      <Location onClick={mockOnCick} location={location} />
    );
    const btn = getByRole('button');
    userEvent.click(btn);
    ['Lorem', 'India'].forEach(v => expect(getByText(v)).toBeDefined());
    expect(getByAltText('Country Flag')).toBeDefined();
    expect(mockOnCick).toHaveBeenCalled();
  });
});
