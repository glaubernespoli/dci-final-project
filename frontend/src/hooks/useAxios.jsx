import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

const useFetch = (axiosParams) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.request(axiosParams);
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

export const useAxios = (method, endpoint, axiosParams) =>
  useFetch({
    url: endpoint,
    method,
    ...axiosParams
  });

export const useAxiosProtected = async (method, endpoint, axiosParams) => {
  const { getAccessTokenSilently } = useAuth0();
  const token = await getAccessTokenSilently();

  const params = axiosParams;
  params.headers = {
    Authorization: `Bearer ${token}`,
    ...params.headers
  };
  useFetch({
    url: endpoint,
    method,
    ...params
  });
};
