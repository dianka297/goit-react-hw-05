import axios from 'axios';

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjBkMDBhZGRjNmM0M2I2YTYwZTliODQ2ZjhkYWE5OSIsIm5iZiI6MTcyMDg5MzI2Ni4wNTY5NzQsInN1YiI6IjY2OTJiNGEzM2FiNTQzNDMzZTYzYWUwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lo5cCzM2Dxlh7sLwY6L0KY0zTnOyif-aU00Rk6heGRQ';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_TOKEN}`;
axios.defaults.headers.common['accept'] = 'application/json';

export const getMovies = async (url, query) => {
  const { data } = await axios.get(url + query);
  return data;
};