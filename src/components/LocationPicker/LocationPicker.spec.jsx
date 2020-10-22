import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import FakeTimers from '@sinonjs/fake-timers';
import LocationPicker from './LocationPicker';

const mockFetchLocations = jest.fn();
describe('<LocationPicker />', () => {
  let clock;
  beforeEach(() => {
    clock = FakeTimers.install();
  });
  afterEach(() => {
    clock.uninstall();
  });
  test('renders', () => {
    const wrapper = render(
      <LocationPicker
        location_suggestions={[]}
        fetchLocations={mockFetchLocations}
      />
    );
    const { getByTestId, getByLabelText } = wrapper;
    const locationBtn = getByTestId('locationBtn');
    userEvent.click(locationBtn);
    const searchField = getByLabelText('Enter you city name');
    userEvent.type(searchField, 'Hyderabad');
    clock.tick(500); // advance the clock by the amount of the debounce

    userEvent.tab(searchField);
  });
  test('renders loader', () => {
    const wrapper = render(
      <LocationPicker location_suggestions={[]} loading />
    );
    expect(wrapper).toBeDefined();
  });
  test('renders locations', () => {
    const wrapper = render(
      <LocationPicker
        location_suggestions={[
          {
            id: 1,
            name: 'Hyderaba',
          },
        ]}
      />
    );
    expect(wrapper).toBeDefined();
  });
});
