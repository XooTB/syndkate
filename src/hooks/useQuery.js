import React, { useState } from "react";

const useQuery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const query = async (searchText) => {
    setIsLoading(true);
    setIsError(false);
    setError(null);
    setData([]);

    const response = await fetch(
      `${import.meta.env.VITE_API}/product/search?title=${searchText}`
    );
    console.log(response);

    if (response.status === 200) {
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } else if (response.status === 404) {
      const error = response.json();
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  };

  return { isLoading, isError, error, data, query };
};

export default useQuery;
