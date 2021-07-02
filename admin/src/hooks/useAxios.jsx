import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const useAxios = (method, endpoint, axiosParams) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const token = await getAccessTokenSilently();

      const params = { ...axiosParams };
      params.headers = {
        Authorization: `Bearer ${token}`,
        ...params.headers
      };
      try {
        const result = await axios.request({
          url: `/admin${endpoint}`,
          method,
          ...params
        });
        setData(result.data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, isLoading };
};

export default useAxios;
