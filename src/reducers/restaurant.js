import {
  FETCH_RESTAURANTS,
  FETCH_RESTAURANTS_FULFILLED,
  FETCH_RESTAURANTS_PENDING,
} from '../config/constants';

const initialState = {
  loading: false,
  error: null,
  restaurants: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
    case FETCH_RESTAURANTS_PENDING:
      return { ...state, loading: true, error: null, data: [] };
    case FETCH_RESTAURANTS_FULFILLED: {
      const rests = action.payload.data.restaurants.map(r => ({
        ...r.restaurant,
        cuisines: (r.restaurant.cuisines || '').split(', '),
      }));
      return {
        ...state,
        loading: false,
        error: null,
        restaurants: rests,
      };
    }
    default:
      return { ...state };
  }
};
