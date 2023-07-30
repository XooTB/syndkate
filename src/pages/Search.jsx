import React, { useState } from "react";
import { useAtom } from "jotai";
import ProductOverview from "../components/ProductOverview";
import { searchTextAtom } from "../atoms/searchAtoms";
import useSearch from "../hooks/useSearch";

const Search = () => {
  const [sortBy, setSortBy] = useState();
  const [searchText, setSearchText] = useAtom(searchTextAtom);
  const { searchResult, isLoading, isError } = useSearch();
  let data;

  const options = [
    {
      text: "Price (Lowest)",
      value: "lowest",
    },
    {
      text: "Price (Highest)",
      value: "highest",
    },
  ];
  //
  //

  if (searchResult && sortBy === "lowest") {
    data = searchResult.sort((a, b) => a.latestPrice - b.latestPrice);
  } else if (searchResult && sortBy === "highest") {
    data = searchResult.sort((a, b) => b.latestPrice - a.latestPrice);
  } else if (searchResult) {
    data = searchResult;
  }

  const handleChange = (e) => {
    e.preventDefault();
    const text = e.target.value;
    if (text.length > 3) {
      setSearchText(text);
    }
  };

  const handleSelect = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="w-full mt-10 md:px-[100px] px-2">
      <div className="flex mx-5 flex-col md:flex-row ">
        <input
          type="text"
          className="border-[1px] border-accent1 font-opensans font-medium w-full h-10 md:h-11 rounded-xl p-3 md:w-1/2"
          onChange={handleChange}
          defaultValue={searchText ? searchText : ""}
        />
        <div className="flex flex-row mt-4 md:mt-0 justify-between md:justify-start gap-4 items-center md:w-1/3 md:ml-5">
          <button className="bg-primary1 px-3 py-3 rounded-xl font-opensans text-sm hover:bg-secondary1 text-text1 font-semibold w-1/3">
            Search
          </button>
          <select
            onChange={handleSelect}
            className=" py-2 px-3 rounded-lg border-[1px] border-accent1 bg-text1 text-secondary1 font-opensans font-medium max-w-1/3"
          >
            <option selected disabled hidden>
              Sort By:
            </option>
            {options.map((option, i) => (
              <option value={option.value} key={i}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="px-4">
        {isLoading ? <div>Loading.... </div> : null}
        {isError ? <div>Error.... </div> : null}
        {data
          ? data.map((product, i) => (
              <ProductOverview product={product} key={i} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Search;
