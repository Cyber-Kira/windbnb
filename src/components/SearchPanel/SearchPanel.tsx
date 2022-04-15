import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import stays from "../../data/stays.json";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  SearchPanelContext,
  SearchPanelDataContext,
  SearchPanelDataInterface,
  SearchPanelInterface,
} from "../..";
import { GuestsSelector } from "../GuestsSelector";

export const SearchPanel = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const [adultsValue, setAdultsValue] = useState(0);
  const [childrenValue, setChildrenValue] = useState(0);
  const [currentDisplayingElement, setCurrentDisplayingElement] = useState("");
  const { searchPanelStatus, setSearchPanelStatus } = useContext(
    SearchPanelContext
  ) as SearchPanelInterface;
  const { locationValue, setLocationValue, guestsValue, setGuestsValue } =
    useContext(SearchPanelDataContext) as SearchPanelDataInterface;

  const populateLocations = (filterString: string) => {
    const staysLocations = stays.map(
      (value) => `${value.city}, ${value.country}`
    );

    setLocations([...new Set(staysLocations)]);
  };

  const resetChildrenCounters = () => {
    setAdultsValue(0);
    setChildrenValue(0);
    setGuestsValue("");
  };

  useEffect(() => {
    populateLocations(locationValue);
  }, [locationValue]);

  const locationsElement = () => {
    return (
      <ul className="flex flex-col">
        {locations.map((location) => {
          return (
            <li
              key={location}
              className="block pl-5 cursor-pointer py-4"
              onClick={(e) => {
                const currentValue = e.currentTarget.childNodes[1].textContent;
                currentValue && setLocationValue(currentValue);
              }}
            >
              <LocationOnIcon sx={{ color: "#4f4f4f" }} />
              {location}
            </li>
          );
        })}
      </ul>
    );
  };

  const guestsElement = () => {
    return (
      <GuestsSelector
        guestsValue={guestsValue}
        setGuestsValue={setGuestsValue}
        adultsValue={adultsValue}
        childrenValue={childrenValue}
        setAdultsValue={setAdultsValue}
        setChildrenValue={setChildrenValue}
      />
    );
  };

  const currentElement = () => {
    if (currentDisplayingElement === "location") {
      return locationsElement();
    }
    if (currentDisplayingElement === "guests") {
      return guestsElement();
    }
  };

  return (
    <div className={`${searchPanelStatus ? "" : "hidden"}`}>
      <form className="fixed top-0 right-0 p-4 z-10 w-screen min-h-fit h-5/6 bg-white">
        <div className="flex items-center mb-4">
          <p className="md:hidden font-secondary font-bold text-xs leading-4">
            Edit your search
          </p>
          <div
            onClick={() => setSearchPanelStatus(false)}
            className="relative ml-auto w-8 h-8 cursor-pointer flex items-center justify-center after:absolute after:left-4 after:h-5 after:w-px after:bg-black after:rotate-45 after:rounded before:absolute before:left-4 before:h-5 before:w-px before:bg-black before:-rotate-45 before:rounded"
          ></div>
        </div>
        <div className="rounded-xl flex md:flex-row flex-col shadow-md md:container md:mx-auto">
          <label className="block border-b-2 md:border-b-0 md:border-r-2 border-light md:flex-1 px-6 py-3">
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
                onClick={() => setCurrentDisplayingElement("location")}
              />
              <button
                type="button"
                onClick={() => setLocationValue("")}
                className="relative ml-auto w-8 h-8 cursor-pointer inline-flex items-center justify-center after:absolute after:left-4 after:h-5 after:w-px after:bg-black after:rotate-45 after:rounded before:absolute before:left-4 before:h-5 before:w-px before:bg-black before:-rotate-45 before:rounded"
              ></button>
            </div>
          </label>
          <label className="block px-6 md:flex-1 md:border-r-2 border-light py-3">
            <span className="block text-main font-secondary text-xxs font-extrabold leading-3 uppercase tracking-wide">
              Guests
            </span>
            <div className="flex">
              <input
                className="w-full p-1 focus:outline-none"
                type="text"
                placeholder="Add guests"
                value={guestsValue ? guestsValue : ""}
                readOnly
                onClick={() => setCurrentDisplayingElement("guests")}
              />
              <button
                type="button"
                onClick={() => resetChildrenCounters()}
                className="relative ml-auto w-8 h-8 cursor-pointer inline-flex items-center justify-center after:absolute after:left-4 after:h-5 after:w-px after:bg-black after:rotate-45 after:rounded before:absolute before:left-4 before:h-5 before:w-px before:bg-black before:-rotate-45 before:rounded"
              ></button>
            </div>
          </label>
          <div className="md:flex md:flex-1 px-6 items-center justify-center">
            <button
              className="absolute bottom-0 left-1/2 -translate-x-1/2 px-7 py-4 md:block md:static md:translate-x-0 bg-buttonColor rounded-2xl mb-6 md:mb-0 text-light"
              type="button"
              onClick={() => setSearchPanelStatus(false)}
            >
              <SearchIcon sx={{ color: "#f2f2f2" }} /> Search
            </button>
          </div>
        </div>
        <div className="flex items-center mb-4 md:container md:mx-auto">
          <div className="hidden md:block flex-1 mt-9 max-h-50 overflow-auto">
            {currentDisplayingElement === "location" ? locationsElement() : ""}
          </div>
          <div className="hidden md:block flex-1 d:mt-9 d:max-h-50 d:overflow-auto">
            {currentDisplayingElement === "guests" ? guestsElement() : ""}
          </div>
          <div className="md:opacity-0 flex-1 mt-9 max-h-50 overflow-auto">
            {currentElement()}
          </div>
        </div>
      </form>
      <div
        className={`absolute inset-0 backdrop-brightness-75 backdrop-blur-sm ${
          searchPanelStatus ? "" : "hidden"
        }`}
      ></div>
    </div>
  );
};
