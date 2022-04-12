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

export const SearchPanelContext =
  React.createContext<SearchPanelInterface | null>(null);

const App = () => {
  const [searchPanelStatus, setSearchPanelStatus] = useState<boolean>(false);

  return (
    <>
      <SearchPanelContext.Provider
        value={{ searchPanelStatus, setSearchPanelStatus }}
      >
        <Header />
        <Bookings stays={stays} />
        <SearchPanel />
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
