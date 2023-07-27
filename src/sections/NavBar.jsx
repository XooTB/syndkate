import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav h-50px md:h-[75px] lg:h-[100px] bg-transparent flex justify-between items-center w-full">
      <div className="w-0 sm:w-16 md:w-[130px] md:ml-[50px]"></div>
      <h1 className="font-keania text-text1 text-4xl md:text-5xl uppercase tracking-widest">
        <NavLink to="/">SyndKate</NavLink>
      </h1>
      <NavLink to="/about">
        <button className="bg-primary1 text-text1 px-5 py-1 rounded-lg font-inika font-semibold mr-3 md:mr-32 md:px-8 md:py-2 md:text-lg md:rounded-xl hover:bg-secondary1">
          About
        </button>
      </NavLink>
    </div>
  );
};

export default NavBar;
