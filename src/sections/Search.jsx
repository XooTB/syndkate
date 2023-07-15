import React from "react";

const Search = ({ onClick }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <input
        onClick={onClick}
        className="border-2 border-text rounded-3xl w-3/4 max-w-[75vw] md:max-w-[50vw] h-[50px] md:h-[60px] text-text placeholder:text-text placeholder:font-semibold placeholder:text-base md:placeholder:text-lg font-semibold pl-3 md:pl-5"
        placeholder="Enter Product Name"
      />
    </div>
  );
};

export default Search;
