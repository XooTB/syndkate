import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { productInfo } from "../atoms/productAtoms";

const useProduct = (id) => {
  const [value, setValue] = useAtom(productInfo);

  const { isLoading, isError, data } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      if (id) {
        const response = await fetch(
          `${import.meta.env.VITE_API}/product/${id}`
        );

        setValue(response.json());
        return true;
      }
    },
  });

  return { value, isLoading, isError, data };
};

export default useProduct;
