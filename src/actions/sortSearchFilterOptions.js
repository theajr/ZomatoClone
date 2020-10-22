import {
  TOGGLE_SEARCH_OPTION,
  SET_FILTER_RATING_RANGE,
  SET_RATING_SORT_ORDER,
  SET_RESTAURANT_NAME,
} from '../config/constants';

export const toggleSearchOption = (key, value) => ({
  type: TOGGLE_SEARCH_OPTION,
  key,
  value,
});

export const setRestaurantName = restaurantName => ({
  type: SET_RESTAURANT_NAME,
  restaurantName,
});

export const updateFilterRatingRange = range => ({
  type: SET_FILTER_RATING_RANGE,
  range,
});

export const updateFilterSortOrder = order => ({
  type: SET_RATING_SORT_ORDER,
  order,
});
