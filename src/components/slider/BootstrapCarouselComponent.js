import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import steps from '../../assets/Steps.png';

class BootstrapCarouselComponent extends React.Component {
  render() {
    return (
      <div>
        {/* <div className="container-fluid"> */}
          <div className="row justify-content-md-center">
              <Carousel>
              <div className="col-4">
              <Carousel.Caption>
                    <h3>Verify you account</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.                    </p>
                  </Carousel.Caption>
                  </div>
                
                  <div className="col-8">
                  <img
                    className="d-block w-100"
                    src={steps} 
                    alt="First slide"
                  />
                  <Carousel.Item></Carousel.Item>
                  
                </div>
              </Carousel>
          </div>
        </div>
      // </div>
    );
  }
}
export default BootstrapCarouselComponent;
