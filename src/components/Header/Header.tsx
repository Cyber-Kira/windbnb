import React from "react";
import logo from "./assets/logo.png";
import { Search } from "../Search";

export const Header = () => {
  return (
    <div className="md:flex md:justify-between md:align-middle md:mt-8 md:container md:mx-auto px-5">
      <div className="w-100">
        <a href="#" className="inline-block py-5 px-3 hover:cursor-pointer">
          <img src={logo} alt="Windbnb logo" />
        </a>
      </div>
      <Search location={"123"} numOfGuests={1} />
    </div>
  );
};
