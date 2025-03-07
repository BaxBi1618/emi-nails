import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Navigation from "./elements/navigation.js";
import Main from "./elements/main.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navigation />
    <Main />
  </React.StrictMode>
);
