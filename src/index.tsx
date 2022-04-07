import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components";
import "./index.css";

const App = () => {
  return <Header />;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
