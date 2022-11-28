import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./carrusel.css"
import casaPileta from "../img/casaPileta.jpg"
import pile from "../img/pile.jpeg"
import bordeate from "../img/bordeate.jpg"

function CarouselFadeExample() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="contenedorImgWe"
            src={casaPileta}
            alt="primera foto"
          />
          <Carousel.Caption>
            <h3>DECK ATERMICO</h3>
            <p className='contenedorTextoWe'>Novedoso piso de listones realizados en hormigón con alma de hierro en su interior. Tienen todas las propiedades del piso atérmico y antideslizante.Su colocación y corte es similar a cualquier otro piso cementicio.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="contenedorImgWe"
            src={pile}
            alt="segunda foto"
          />
  
          <Carousel.Caption>
            <h3>BORDES ATERMICOS</h3>
            <p className='contenedorTextoWe'>Un sistema modular que se adapta según formatos y requerimientos.
Su constitución lo hace un producto atérmico, el cual es ideal ya que su superficie no levanta temperatura.
La porosidad de su textura previene deslizamientos brindando mayor seguridad respecto a otros materiales.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="contenedorImgWe"
            src={bordeate}
            alt="Tercera foto"
          />
  
          <Carousel.Caption>
            <h3>AQUAVATIONS</h3>
            <p className='contenedorTextoWe'>
            Es un revolucionario revestimiento in situ, elegante, resistente y suave. Compuesto por cemento Portland, cuarzo y mármol pulido, es un revestimiento profesional que hará que jamás piense en pintar su pileta.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
          export default CarouselFadeExample;