import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
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
import firstIcon from "./assets/Group 27998.png";
import secondIcon from "./assets/Group 28000.png";
import thirdIcon from "./assets/Group 28002.png";
import forthIcon from "./assets/Group 28003.png";
import { Navigation } from "swiper";
import step from "./assets/Steps.png";
import "bootstrap/js/src/collapse.js";

function App() {
  const itemRows = [];

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  for (let item of List) {
    const row = (
      <div className="col nopadding" key={item.id}>
        <div className="box" key={item.id}>
          <div className="row nopadding">
            <div className="col-sm nopadding" key={1}>
              <p className="instrument__font">
                {item.instrument.toUpperCase()}
              </p>
            </div>
            <div className="col-sm" key={2}>
              <p className="price__font">{item.price}</p>
            </div>
          </div>
          <div className="row nopadding">
            <div className="col-sm" key={3}>
              <p className="item__font">{item.sentiment.toUpperCase()}</p>
            </div>
            <div className="col-sm" key={3}>
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
          <a class="navbar-brand text-info font-weight-bolder" href="/">
            <div className="col-sm d-flex justify-content-end">
            <img className="logo" src={logo}></img>
            <img className="logo-sec" src={tio}></img>
          </div>
          </a>
          <button
            class="custom-toggler navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarsExample09"
          >
            <div className="col-sm d-flex justify-content-center">
           <div className="nav-wrapper">
              <div className="nav-item">
                Market News
                <div className="triangle"></div>
              </div>
              <div className="nav-item">
                Market Strategies
                <div className="triangle"></div>
              </div>
            </div></div>
            <div className="col-sm d-flex justify-content-center">
            <div className="nav-wrapper">
              <div className="nav-item">
                <img src={brFlag} width="35px;"></img>
                <div className="triangle"></div>
              </div>
              <button type="button" className="btn btn-primary">
                Register
              </button>
            </div>
            </div>
          </div>
        </nav>
        
        <div className="container">
          <div className="row">
            {/* <div className="hero"> */}
            <div className="col-sm flex-col">
              <h2>
                Trade Forex &<br></br> Stock Online
              </h2>
              <button type="button" className="btn btn-primary">
                Register
              </button>
            </div>
            {/* </div> */}
            <div className="col-sm">
              <img src={hero}></img>
            </div>
          </div>
        </div>
        <div className="features-container">
          <div className="row">
            <div className="col-sm justify-content-center">
              <div className="features-icons">
                <img src={firstIcon}></img>
              </div>
              <p className="features-text">0 Commissions & Raw Spreads</p>
            </div>
            <div className="col-sm">
              <div className="features-icons">
                <img src={secondIcon}></img>
              </div>
              <p className="features-text">Market Analysis & FX Webinars</p>
            </div>
            <div className="col-sm">
              <div className="features-icons">
                <img src={thirdIcon}></img>
              </div>
              <p className="features-text">Instant Trading Execution</p>
            </div>
            <div className="col-sm">
              <div className="features-icons">
                <img src={forthIcon}></img>
              </div>
              <p className="features-text">Live Support In Your Language</p>
            </div>
          </div>
        </div>
        <div className="row">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="container">
                <div className="row carousel-swiper">
                  <div className="col-6">
                    <h3 className="boldy">Verify you account</h3>
                    <p className="carousel-text">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr.
                    </p>
                    <p className="transperant-font">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut.Lorem ipsum
                      dolor sit amet, consetetur sadipscing elitr.
                    </p>
                  </div>
                  <div className="col-6">
                    <img src={step}></img>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
          </Swiper>
        </div>
      </body>
    </>
  );
}

export default App;
