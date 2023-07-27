import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductOverview from "../components/ProductOverview";

const Search = () => {
  const [searchText, setSearchText] = useState();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["product", searchText],
    queryFn: async () => {
      if (searchText) {
        const response = await fetch(
          `${import.meta.env.VITE_API}/product/search?title=${searchText}`
        );
        return response.json();
      }
      return "";
    },
  });
  const handleChange = (e) => {
    e.preventDefault();
    const text = e.target.value;
    if (text.length > 3) {
      setSearchText(text);
    }
  };
  console.log(data);

  return (
    <div className="w-full mt-10">
      <div className="flex mx-5">
        <input
          type="text"
          className="border-2 w-3/5 h-10 md:h-11 rounded-xl p-3 md:w-2/5"
          onChange={handleChange}
        />
        <button className="bg-primary px-5 py-2 rounded-xl ml-3 font-noto text-sm hover:bg-secondary text-text font-semibold">
          Search
        </button>
      </div>
      <div className="px-4">
        {isLoading ? <div>Loading.... </div> : null}
        {isError ? <div>Error.... </div> : null}
        {data
          ? data.map((product) => <ProductOverview product={product} />)
          : null}
      </div>
    </div>
  );
};

export default Search;
