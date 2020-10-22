import _ from 'lodash';
import {
  SET_FILTER_RATING_RANGE,
  SET_RATING_SORT_ORDER,
  SET_RESTAURANT_NAME,
  TOGGLE_FILTER_OPTION,
  TOGGLE_SEARCH_OPTION,
} from '../config/constants';

const initialState = {
  filter: {
    ratingRange: [0, 5],
  },
  sort: {
    rating: 'DESC',
  },
  search: {
    restaurantName: '',
    categories: [],
    cuisines: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_OPTION: {
      const { key, value } = action;
      return { ...state };
    }
    case TOGGLE_SEARCH_OPTION: {
      const { key, value } = action;

      return {
        ...state,
        search: {
          ...state.search,
          [key]: _.xor(state.search[key], [value]),
        },
      };
    }
    case SET_RESTAURANT_NAME:
      return {
        ...state,
        search: { ...state.search, restaurantName: action.restaurantName },
      };
    case SET_FILTER_RATING_RANGE:
      return {
        ...state,
        filter: { ...state.filter, ratingRange: action.range },
      };

    case SET_RATING_SORT_ORDER:
      return { ...state, sort: { ...state.sort, rating: action.order } };
    default:
      return { ...state };
  }
};
