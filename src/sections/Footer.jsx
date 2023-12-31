import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between px-[20px] md:px-[75px] items-center h-[75px] md:h-[100px] font-opensans text-xs md:text-sm bg-transparent text-text1 opacity-60">
      <div className="w-1/3 md:w-1/4 text-center ">
        <p>
          <span className="font-keania">SyndKate</span> is a hobby project as is
          not affiliated with any of the websites.
        </p>
      </div>

      <div className="w-1/3 md:w-1/4 text-center">
        <p>
          Copywrite Reserved by <span className="font-keania">Creator</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
