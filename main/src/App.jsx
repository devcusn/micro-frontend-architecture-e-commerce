import React from "react";
import ReactDOM from "react-dom";

import HorizontalAdvert from "advert/HorizontalAdvert";
import VerticalAdvert from "advert/VerticalAdvert";
import "./index.css";
import Header from "./components/Header";

const App = () => (
  <div className="container">
    <Header />
    <HorizontalAdvert />
    <div style={{ display: "flex" }}>
      <div style={{ width: "100%" }}>content</div>
      <VerticalAdvert />
    </div>

    <HorizontalAdvert />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
