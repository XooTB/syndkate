import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import HomePageResult from "../components/HomePageResult";
import { useDebounce } from "use-debounce";

const SearchBox = ({ onClick }) => {
  const [searchText, setSearchText] = useState("");
  const [text] = useDebounce(searchText, 1500);
  const [toggle, setToggle] = useState(false);
  const { isLoading, isError, data } = useQuery({
    queryKey: [text, "searchProd"],
    queryFn: async () => {
      if (searchText) {
        const response = await fetch(
          `${import.meta.env.VITE_API}/product/search?title=${searchText}`
        );
        return response.json();
      } else {
        return [];
      }
    },
  });

  const sortedData = data?.sort((a, b) => a.latestPrice - b.latestPrice);

  const handleClick = (e) => {
    if (e.target.value?.length < 1) {
      onClick();
      setToggle(!toggle);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const text = e.target.value;
    if (text.length > 3) {
      setSearchText(text);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center font-opensans">
      <input
        onClick={handleClick}
        onChange={handleChange}
        className="border-[1px] border-accent1 bg-background1 opacity-40 rounded-3xl w-4/5 max-w-[80vw] 
        md:max-w-[50vw] h-[30px] md:h-[50px] text-text1 placeholder:text-text1 placeholder:opacity-80 
        placeholder:font-normal placeholder:text-xs md:placeholder:text-base font-medium pl-3 md:pl-5"
        placeholder="Enter Product Name"
      />

      {toggle && data?.length ? (
        <div className="w-4/5 max-w-[80vw] md:max-w-[50vw] h-96 bg-background1 bg-opacity-60 mt-1.5 rounded-lg overflow-y-scroll scroll-smooth">
          {isLoading ? <div>Loading.....</div> : null}
          {isError ? <div>Error.....</div> : null}
          {sortedData
            ? sortedData.map((product, i) => (
                <HomePageResult product={product} key={i} />
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBox;
