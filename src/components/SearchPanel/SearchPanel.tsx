import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export const SearchPanel = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-1/4 md:bottom-1/2 z-20 bg-white">
        <form
          className="flex flex-nowrap py-3 px-7 items-center container m-auto shadow mt-24 rounded-xl"
          method="get"
        >
          <label className="focus:outline-1 outline-black">
            <span className="block">Location</span>
            <input className="block" type="text" placeholder="Add location" />
          </label>
          <label>
            <span className="block">Guests</span>
            <input className="block" type="text" placeholder="Add guests" />
          </label>
          <button
            className="px-7 py-4 rounded-2xl font-bold text-sm leading-4 text-light bg-brand"
            type="submit"
          >
            <SearchIcon sx={{ color: "#f2f2f2" }} /> Search
          </button>
        </form>
      </div>
      <div className="absolute inset-0 z-0 backdrop-blur"></div>
    </>
  );
};
