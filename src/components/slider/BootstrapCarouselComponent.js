import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import steps from '../../assets/Steps.png';

class BootstrapCarouselComponent extends React.Component {
  render() {
    return (
      <div className="slider-container">
      <div className="container">
          <div className="row justify-content-md-center">
              <div className="col-5">
              <Carousel>
              <img
                    className="d-block w-100"
                    src={steps} 
                    alt="First slide"
                  />
                  <Carousel.Item></Carousel.Item>
              <Carousel.Caption>
                  </Carousel.Caption>
                  </Carousel>
                  </div>
                  <div className="col-7">
                    <div className="carousel-desc">
                    <h3><b>Verify you account</b></h3>
                    <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    <p className="text-trans">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                </div>
              
          </div>
        </div>
        </div>
    );
  }
}
export default BootstrapCarouselComponent;
