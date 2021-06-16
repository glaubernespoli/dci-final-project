/* eslint-disable no-console */
import axios from 'axios';

const getData = async (search) => {
  const response = await axios.get('http://localhost:5000/record/s', {
    params: {
      name: search,
      pageNumber: 2,
      pageLimit: 2
    }
  });
  return response.data;
};
export default getData;
