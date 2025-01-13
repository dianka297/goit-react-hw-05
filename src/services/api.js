import axios from "axios";

const API_KEY = "2a796ea6dc9f2c8546198bb6a5e93a48";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMoviesData = async (page) => {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${page}`;
  const { data } = await axios.get(url);
  console.log(data);

  return data;
};

export const getMovieDetails = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  return data;
};

export const searchMovies = async ({ query, page }) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&per_page=12`;
  const { data } = await axios.get(url);
  return data;
};

export const getMovieCast = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  return data.cast;
};

export const getMovieReviews = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  console.log(data.results);

  return data.results;
};