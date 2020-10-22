import axios from '../config/axios';
import { FETCH_RESTAURANTS, SET_RESTAURANT_NAME } from '../config/constants';

export const searchRestaurants = qObject => {
  const { categories, restaurantName, ...rest } = qObject;
  return {
    type: FETCH_RESTAURANTS,
    payload: axios.get(`/search`, {
      params: {
        ...rest,
        q: restaurantName,
        entity_type: 'city',
        entity_id: rest.cityId,
      },
    }),
  };
};
