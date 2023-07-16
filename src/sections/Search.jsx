import React from "react";

const Search = ({ onClick }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <input
        onClick={onClick}
        className="border-2 border-text rounded-3xl w-3/4 max-w-[75vw] md:max-w-[50vw] h-[30px] md:h-[50px] text-text placeholder:text-text placeholder:font-medium placeholder:text-sm md:placeholder:text-base font-semibold pl-3 md:pl-5"
        placeholder="Enter Product Name"
      />
    </div>
  );
};

export default Search;
