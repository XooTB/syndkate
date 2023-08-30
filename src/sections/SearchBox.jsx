import React, { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import HomePageResult from "../components/HomePageResult";
import { HashLoader } from "react-spinners";
import { useDebounce } from "use-debounce";
import useQuery from "../hooks/useQuery";

const SearchBox = ({ onClick }) => {
  const [searchText, setSearchText] = useState("");
  const [finalText] = useDebounce(searchText, 1200);
  const [toggle, setToggle] = useState(false);

  const { data, isLoading, isError, error, query } = useQuery();

  let sortedData = [];
  if (data?.length) {
    sortedData = data?.sort((a, b) => a.latestPrice - b.latestPrice);
  }

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

  useEffect(() => {
    if (finalText) {
      query(finalText);
    }
  }, [finalText]);

  return (
    <div className="w-full flex flex-col justify-center items-center font-opensans">
      <form className="w-4/5 max-w-[80vw] md:max-w-[50vw]">
        <input
          onClick={handleClick}
          onChange={handleChange}
          className="border-[1px] border-accent1 bg-background1 opacity-40 rounded-3xl w-4/5 max-w-[80vw] 
        md:max-w-[50vw] h-[30px] md:h-[50px] text-text1 placeholder:text-text1 placeholder:opacity-80 
        placeholder:font-normal placeholder:text-xs md:placeholder:text-base font-medium pl-3 md:pl-5"
          placeholder="Enter Product Name"
        />
      </form>

      {isLoading && (
        <div className="w-4/5 max-w-[80vw] md:max-w-[50vw] h-80 bg-background1 bg-opacity-60 mt-1.5 rounded-lg ">
          <div className="h-full text-text1 flex items-center justify-center">
            <HashLoader color="#38d8e0" />{" "}
          </div>
        </div>
      )}

      {isError && (
        <div className="w-4/5 max-w-[80vw] md:max-w-[50vw] h-80 bg-background1 bg-opacity-60 mt-1.5 rounded-lg">
          <div className="h-full text-text1 flex items-center justify-center">
            <h1 className="text-xl">No Matching Products found!</h1>
          </div>
        </div>
      )}

      {toggle && data?.length ? (
        <div className="w-4/5 max-w-[80vw] md:max-w-[50vw] h-80 bg-background1 bg-opacity-60 mt-1.5 rounded-lg overflow-y-scroll scroll-smooth">
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
