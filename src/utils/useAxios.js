import { useState, useCallback } from "react";
import axios from "axios";

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);

    let res;
    try {
      res = await axios({
        url: requestConfig.url,
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        data: requestConfig.data ? requestConfig.data : null,
      });
    } catch (error) {
      setError(error.message || "Something went wrong!");
    } finally {
      if (res) {
        applyData(res.data);
      }
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useAxios;