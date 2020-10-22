import axios from 'axios';
import { ZOMATO_API_URL } from './zomato';

export default axios.create({
  baseURL: ZOMATO_API_URL,
  headers: { 'user-key': process.env.ZOMATO_API_KEY },
});
