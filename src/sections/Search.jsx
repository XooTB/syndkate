import React from "react";

const Search = ({ onClick }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <input
        onClick={onClick}
        className="border-2 border-text rounded-3xl w-3/4 max-w-[45vw] h-[60px] text-text placeholder:text-text placeholder:font-bold font-semibold pl-5"
        placeholder="Enter Product Name"
      />
    </div>
  );
};

export default Search;
