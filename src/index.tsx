import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components";
import "./index.css";

import stays from "./data/stays.json";
import { Bookings } from "./components/Bookings";

const App = () => {
  return (
    <>
      <Header />
      <Bookings stays={stays} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
