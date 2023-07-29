import axios from 'axios';

export const getParaTops = async () => {
  const response = await axios.get('http://localhost:4000/paratop');
  return response.data;
};

export const getParaTopById = async id => {
  const response = await axios.get(`http://localhost:4000/paratop/${id}`);
  return response.data;
};