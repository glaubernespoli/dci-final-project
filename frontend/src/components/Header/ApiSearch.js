/* eslint-disable no-console */
import axios from 'axios';

const getData = async (search) => {
  try {
    const response = await axios.get('http://localhost:5000/record/s', {
      params: {
        name: search
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);

    return error;
  }
};
export default getData;
