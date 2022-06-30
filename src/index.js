import React from "react";
import ReactDOM from "react-dom";
import { Router, BrowserRouter, HashRouter } from "react-router-dom";
//import { createBrowserHistory } from "history";

import App from "./App";
// import './App.css';
import "./assets/scss/style.scss";

//const history = createBrowserHistory();

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
