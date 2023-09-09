import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "main/Header";

const App = () => (
  <div className="container">
    <Header/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
