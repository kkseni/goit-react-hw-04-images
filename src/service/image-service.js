import axios from 'axios';

const API_KEY = '29239921-6824171c8e67d20083e37057c';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  orientation: 'horizontal',
  image_type: 'photo',
  per_page: 12,
  key: API_KEY,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};
