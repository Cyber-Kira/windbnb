import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components";
import "./index.css";

import stays from "./data/stays.json";
import { Bookings } from "./components/Bookings";
import { SearchPanel } from "./components/SearchPanel";

export interface SearchPanelInterface {
  searchPanelStatus: boolean;
  setSearchPanelStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchPanelContext =
  React.createContext<SearchPanelInterface | null>(null);

export interface SearchPanelDataInterface {
  locationValue: string;
  guestsValue: string;
  setLocationValue: React.Dispatch<React.SetStateAction<string>>;
  setGuestsValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchPanelDataContext =
  React.createContext<SearchPanelDataInterface | null>(null);

const App = () => {
  const [searchPanelStatus, setSearchPanelStatus] = useState<boolean>(false);
  const [locationValue, setLocationValue] = useState("");
  const [guestsValue, setGuestsValue] = useState("");

  return (
    <>
      <SearchPanelContext.Provider
        value={{ searchPanelStatus, setSearchPanelStatus }}
      >
        <SearchPanelDataContext.Provider
          value={{
            locationValue,
            setLocationValue,
            guestsValue,
            setGuestsValue,
          }}
        >
          <Header />
          <Bookings stays={stays} filterString={locationValue} />
          <SearchPanel />
        </SearchPanelDataContext.Provider>
      </SearchPanelContext.Provider>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);
