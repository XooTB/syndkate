import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav h-50px md:h-[75px] lg:h-[100px] bg-background flex justify-between items-center w-full">
      <div className="w-0 sm:w-16 md:w-[130px] md:ml-[50px]"></div>
      <NavLink to="/">
        <h1 className="font-keania text-text bold text-4xl md:text-5xl font-bold uppercase tracking-widest">
          SyndKate
        </h1>
      </NavLink>
      <NavLink to="/about">
        <button className="bg-secondary px-5 py-1 rounded-lg font-changa mr-3 md:mr-32 md:px-8 md:py-2 md:text-lg md:rounded-xl hover:bg-primary">
          About
        </button>
      </NavLink>
    </div>
  );
};

export default NavBar;
