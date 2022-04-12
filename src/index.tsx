import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Header } from "./components";
import "./index.css";

import stays from "./data/stays.json";
import { Bookings } from "./components/Bookings";
import { SearchPanel } from "./components/SearchPanel";

export interface SearchPanelInterface {
  searchPanelStatus: boolean;
  setSearchPanelStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchInterface {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
}

export const SearchPanelContext =
  React.createContext<SearchPanelInterface | null>(null);

export const SearchContext = React.createContext<SearchInterface | null>(null);

const App = () => {
  const [searchPanelStatus, setSearchPanelStatus] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("");
  const [guests, setGuests] = useState<number>(0);

  return (
    <>
      <SearchPanelContext.Provider
        value={{ searchPanelStatus, setSearchPanelStatus }}
      >
        <SearchContext.Provider
          value={{ location, setLocation, guests, setGuests }}
        >
          <Header />
          <Bookings stays={stays} />
          <SearchPanel />
        </SearchContext.Provider>
      </SearchPanelContext.Provider>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
