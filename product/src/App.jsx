import React from "react";
import ReactDOM from "react-dom";

import Header from "home/Header"
import "./index.css";

const App = () => (
  <div className="container">
     <Header/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
