import axios from 'axios';

export const getMains = async () => {
  const response = await axios.get('http://localhost:4000/main');
  return response.data;
};
