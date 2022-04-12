import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import stays from "../../data/stays.json";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SearchPanelContext, SearchPanelInterface } from "../..";

export const SearchPanel = () => {
  const [locationValue, setLocationValue] = useState("");
  const [guestsValue, setGuestsValue] = useState("");
  const [locations, setLocations] = useState<string[]>([]);
  const { searchPanelStatus, setSearchPanelStatus } = useContext(
    SearchPanelContext
  ) as SearchPanelInterface;

  const populateLocations = (filterString: string) => {
    const staysLocations = stays.map(
      (value) => `${value.city}, ${value.country}`
    );

    setLocations([
      ...new Set(
        staysLocations.filter((item) =>
          item.toLowerCase().includes(filterString.toLowerCase())
        )
      ),
    ]);
  };

  useEffect(() => {
    populateLocations(locationValue);
  }, [locationValue]);

  const locationsElement = locations.map((location) => {
    return (
      <ul className="flex flex-col">
        <li
          className="block pl-5 cursor-pointer py-4"
          onClick={(e) => {
            const currentValue = e.currentTarget.childNodes[1].textContent;
            currentValue && setLocationValue(currentValue);
          }}
        >
          <LocationOnIcon sx={{ color: "#4f4f4f" }} />
          {location}
        </li>
      </ul>
    );
  });

  return (
    <div className={`${searchPanelStatus ? "" : "hidden"}`}>
      <form className="fixed top-0 right-0 p-4 z-10 w-screen h-5/6 bg-white">
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
                value={locationValue}
                onChange={(e) => setLocationValue(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setLocationValue("")}
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
                value={guestsValue}
                onChange={(e) => setGuestsValue(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setGuestsValue("")}
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
      <div className="absolute inset-0 backdrop-brightness-75 backdrop-blur-sm"></div>
    </div>
  );
};
