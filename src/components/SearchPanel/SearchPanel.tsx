import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import stays from "../../data/stays.json";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  SearchContext,
  SearchInterface,
  SearchPanelContext,
  SearchPanelInterface,
} from "../..";

export const SearchPanel = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const { searchPanelStatus, setSearchPanelStatus } = useContext(
    SearchPanelContext
  ) as SearchPanelInterface;
  const { location, setLocation, guests, setGuests } = useContext(
    SearchContext
  ) as SearchInterface;

  const populateLocations = (filterString: string) => {
    const staysLocations = stays.map(
      (value) => `${value.city}, ${value.country}`
    );

    setLocations([...new Set(staysLocations)]);
  };

  //Change names later
  useEffect(() => {
    populateLocations(location);
  }, [location]);

  const locationsElement = locations.map((location) => {
    return (
      <ul className="flex flex-col">
        <li
          className="block pl-5 cursor-pointer py-4"
          value={location}
          onClick={(e) => {
            const currentValue = e.currentTarget.childNodes[1].textContent;
            currentValue && setLocation(currentValue);
          }}
        >
          <LocationOnIcon sx={{ color: "#4f4f4f" }} />
          {location}
        </li>
      </ul>
    );
  });

  return (
    <>
      <form
        className={`fixed top-0 right-0 p-4 z-10 transition-transform w-screen h-5/6 bg-white ${
          searchPanelStatus ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center mb-4">
          <p className="md:hidden font-secondary font-bold text-xs leading-4">
            Edit your search
          </p>
          <div
            onClick={() => setSearchPanelStatus(false)}
            className="relative ml-auto w-8 h-8 cursor-pointer flex items-center justify-center after:absolute after:left-4 after:h-5 after:w-px after:bg-black after:rotate-45 after:rounded before:absolute before:left-4 before:h-5 before:w-px before:bg-black before:-rotate-45 before:rounded"
          ></div>
        </div>
        <div className="rounded-xl flex flex-col shadow-md">
          <label className="block border-b-2 border-light px-6 py-3">
            <span className="block text-main font-secondary text-xxs font-extrabold leading-3 uppercase tracking-wide">
              Location
            </span>
            <div className="flex">
              <input
                className="w-full p-1 focus:outline-none"
                type="text"
                placeholder="Add location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setLocation("")}
                className="relative ml-auto w-8 h-8 cursor-pointer inline-flex items-center justify-center after:absolute after:left-4 after:h-5 after:w-px after:bg-black after:rotate-45 after:rounded before:absolute before:left-4 before:h-5 before:w-px before:bg-black before:-rotate-45 before:rounded"
              ></button>
            </div>
          </label>
          <label className="block px-6 py-3">
            <span className="block text-main font-secondary text-xxs font-extrabold leading-3 uppercase tracking-wide">
              Guests
            </span>
            <div className="flex">
              <input
                className="w-full p-1 focus:outline-none"
                type="text"
                placeholder="Add guests"
                value={guests}
                onChange={(e) => setGuests(+e.target.value)}
              />
              <button
                type="button"
                onClick={() => setGuests(0)}
                className="relative ml-auto w-8 h-8 cursor-pointer inline-flex items-center justify-center after:absolute after:left-4 after:h-5 after:w-px after:bg-black after:rotate-45 after:rounded before:absolute before:left-4 before:h-5 before:w-px before:bg-black before:-rotate-45 before:rounded"
              ></button>
            </div>
          </label>
          <button
            className="absolute bottom-0 left-1/2 -translate-x-1/2 px-7 py-4 bg-buttonColor rounded-2xl mb-6 text-light"
            type="submit"
          >
            <SearchIcon sx={{ color: "#f2f2f2" }} /> Search
          </button>
        </div>
        <div className="mt-9 max-h-50 overflow-auto">{locationsElement}</div>
      </form>
      <div
        className={`absolute inset-0 backdrop-brightness-75 backdrop-blur-sm ${
          searchPanelStatus ? "" : "hidden"
        }`}
      ></div>
    </>
  );
};
