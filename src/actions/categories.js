import axios from '../config/axios';
import { FETCH_CATEGORIES } from '../config/constants';

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
  payload: axios.get('/categories'),
});
