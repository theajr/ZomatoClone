import axios from '../config/axios';
import { FETCH_LOCATIONS, SET_LOCATION } from '../config/constants';

export const fetchLocations = q => ({
  type: FETCH_LOCATIONS,
  payload: axios.get(`/cities?q=${q}`),
});

export const setSelectedLocation = selectedLocation => ({
  type: SET_LOCATION,
  location: selectedLocation,
});
