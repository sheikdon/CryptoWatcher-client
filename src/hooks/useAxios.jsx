import axios from "axios";
import { useEffect, useState } from "react"

const useAxios = (e) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
// https://axios-http.com/docs/config_defaults
//allows us to request everytime
  axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

  const coinGecko = async (e) => {
    try {
        setLoading(true);
      const result = await axios(e);
      setResponse(result.data);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    coinGecko(e);
  }, []);

  return {
    response, loading, error
  }
}

export default useAxios