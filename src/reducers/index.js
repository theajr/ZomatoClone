import { combineReducers } from 'redux';

import location from './location';
import restaurant from './restaurant';
import sortSearchFilterOptions from './sortSearchFilterOptions';
import categories from './categories';

export default combineReducers({
  location,
  restaurant,
  categories,
  sortSearchFilterOptions,
});
