import { useAuth0 } from '@auth0/auth0-react';
import jwt from 'jwt-decode';
import { useEffect, useState } from 'react';

const useCheckIsAdmin = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    setLoading(true);
    const getScopes = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE
      });
      const data = jwt(accessToken);
      setIsAdmin(data.permissions && data.permissions.includes('admin:all'));
      setLoading(false);
    };

    getScopes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { isAdmin, loading };
};

export default useCheckIsAdmin;
