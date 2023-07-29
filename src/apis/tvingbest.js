import axios from 'axios';

export const getTvingBests = async () => {
  const response = await axios.get('http://localhost:4000/tvingbest');
  return response.data;
};

export const getTvingBestById = async id => {
  const response = await axios.get(`http://localhost:4000/tvingbest/${id}`);
  return response.data;
};