import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between px-[75px] items-center h-[100px] font-noto text-sm bg-secondary">
      <div className="w-1/4 text-center ">
        <p>
          <span className="font-keania">SyndKate</span> is a hobby project as is
          not affiliated with any of the websites.
        </p>
      </div>

      <div className="w-1/4">
        <p>
          Copywrite Reserved by <span className="font-keania">Creator</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
