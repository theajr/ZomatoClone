import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FULFILLED,
  FETCH_CATEGORIES_PENDING,
} from '../config/constants';

const initialState = {
  loading: false,
  categories: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
    case FETCH_CATEGORIES_PENDING:
      return { ...state, loading: true, error: null };
    case FETCH_CATEGORIES_FULFILLED: {
      return {
        ...state,
        loading: false,
        error: null,
        categories: action.payload.data.categories.map(c => c.categories),
      };
    }
    default:
      return { ...state };
  }
};
