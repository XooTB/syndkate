import React from "react";

const SearchBox = ({ onClick }) => {
  return (
    <div className="w-full flex justify-center items-center font-opensans">
      <input
        onClick={onClick}
        className="border-[1px] border-accent1 bg-background1 opacity-40 rounded-3xl w-3/4 max-w-[75vw] md:max-w-[50vw] h-[30px] md:h-[50px] text-text1 placeholder:text-text1 placeholder:opacity-80 placeholder:font-normal placeholder:text-xs md:placeholder:text-base font-medium pl-3 md:pl-5"
        placeholder="Enter Product Name"
      />
    </div>
  );
};

export default SearchBox;
