import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = async (
    url,
    method = "GET",
    body = null,
    headers = {}
  ) => {
    try {
      const response = await fetch(url, {
        method,
        body,
        headers,
      });
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }
    }
  };
};

export default useHttp;
