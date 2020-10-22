import {
  FETCH_LOCATIONS,
  FETCH_LOCATIONS_FULFILLED,
  FETCH_LOCATIONS_PENDING,
  SET_LOCATION,
} from '../config/constants';

const initialState = {
  loading: false,
  error: null,
  location_suggestions: [],
  selectedLocation: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
    case FETCH_LOCATIONS_PENDING:
      return { ...state, loading: true, error: null };
    case FETCH_LOCATIONS_FULFILLED:
      return {
        ...state,
        loading: false,
        error: null,
        location_suggestions: action.payload.data.location_suggestions,
      };
    case SET_LOCATION:
      return { ...state, selectedLocation: action.location };
    default:
      return state;
  }
};
