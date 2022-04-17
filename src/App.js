import React from "react";

import BootstrapCarouselComponent from "./components/slider/BootstrapCarouselComponent";
import List from "../src/list";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import logo from "./logo-triangle-animate.svg";
import tio from "./logo-tiomarkets-animate.svg";
import lineA from "./assets/Group 28563.svg";
import brFlag from "./assets/Wikipedia-Flags-GB-United-Kingdom-Flag.svg";
import hero from "./assets/Group 28524.png";
import firstIcon from './assets/Group 27998.png';
import secondIcon from './assets/Group 28000.png';
import thirdIcon from './assets/Group 28002.png';
import forthIcon from './assets/Group 28003.png';


function App() {
  const itemRows = [];
  for (let item of List) {
    const row = (
      <div class="col nopadding" key={item.id}>
        <div class="box" key={item.id}>
          <div className="row nopadding">
            <div class="col-sm nopadding" key={1}>
              <p className="instrument__font">
                {item.instrument.toUpperCase()}
              </p>
            </div>
            <div class="col-sm" key={2}>
              <p className="price__font">{item.price}</p>
            </div>
          </div>
          <div className="row nopadding">
            <div class="col-sm" key={3}>
              <p className="item__font">{item.sentiment.toUpperCase()}</p>
            </div>
            <div class="col-sm" key={3}>
              <img src={lineA}></img>
            </div>
          </div>
        </div>
      </div>
    );
    itemRows.push(row);
  }

  return (
    <>
      <body className="app-body">
        {/* top row */}
        <div className="top-nav">
          <div className="row">{itemRows}</div>
        </div>
        <header className="tio-header">
          <div className="row justify-content-md-center">
            <div className="col-sm d-flex justify-content-end">
              <img className="logo" src={logo}></img>
              <img className="logo-sec" src={tio}></img>
            </div>
            {/* dropdown nav menu */}
            <div className="col-sm">
              <div class="nav-wrapper">
              <div class="nav-item">
                  Market News
                  <div class="triangle"></div>
                  </div>
                  <div class="nav-item">
                  Market Strategies
                  <div class="triangle"></div>
                  </div>
              </div>
            </div>
            <div className="col-sm">
            <div class="nav-wrapper">
            <div class="nav-item">
            <img src={brFlag} width="35px;"></img>
                  <div class="triangle"></div>
                  </div>
              <button type="button" class="btn btn-primary">
                Register
              </button>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
        <div className="row">
        {/* <div className="hero"> */}
        <div className="col-sm flex-col"><h2>Trade Forex &<br></br> Stock Online</h2><button type="button" class="btn btn-primary">Register</button></div>
        {/* </div> */}
        <div className="col-sm"><img src={hero}></img></div>
        </div>
        </div>
        <div className="features-container">
        <div className="row">
          <div className="col-sm justify-content-center">
            <div className="features-icons"><img src={firstIcon}></img></div>
            0 Commissions & Raw Spreads
          </div>
          <div className="col-sm">
          <div className="features-icons"><img src={secondIcon}></img></div>
          Market Analysis & FX Webinars
          </div>
          <div className="col-sm">
          <div className="features-icons"><img src={thirdIcon}></img></div>
          Instant Trading Execution
          </div>
          <div className="col-sm">
          <div className="features-icons"><img src={forthIcon}></img></div>
          Live Support In Your Language
          </div>
        </div>
        </div>
        <div className="row">
          <BootstrapCarouselComponent />
        </div>
      </body>
    </>
  );
}

export default App;
