import axios from 'axios';

export const getMovieTops = async () => {
  const response = await axios.get('http://localhost:4000/movietop');
  return response.data;
};

export const getMovieTopById = async id => {
  const response = await axios.get(`http://localhost:4000/movietop/${id}`);
  return response.data;
};