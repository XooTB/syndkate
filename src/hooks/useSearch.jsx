import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const useSearch = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["product"],
  });

  const search = async (searchText) => {};
  return <div>useSearch</div>;
};

export default useSearch;
