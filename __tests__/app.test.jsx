import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store'; // ES6 modules
import App from '../src/App';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('<App />', () => {
  it('renders', () => {
    const initialState = {
      location: {
        loading: true,
        error: null,
        location_suggestions: [],
        selectedLocation: {},
      },
      restaurant: {
        loading: false,
        error: null,
        restaurants: [],
        data: [],
      },
      categories: {
        loading: false,
        categories: [],
        error: null,
      },
      sortSearchFilterOptions: {
        filter: {
          ratings: [],
        },
        sort: {
          rating: 'DESC',
        },
        search: {
          restaurantName: '',
          categories: [],
          cuisines: [],
        },
      },
    };

    const store = mockStore(initialState);
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(app).toBeDefined();
  });
});
