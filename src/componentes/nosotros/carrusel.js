import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import casaPileta from "../img/casaPileta.jpg"
import pile from "../img/pile.jpeg"
import bordeate from "../img/bordeate.jpg"

function CarouselFadeExample() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="casaNosotros"
            src={casaPileta}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pile}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bordeate}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
          export default CarouselFadeExample;