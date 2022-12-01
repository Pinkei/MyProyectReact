import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./carrusel.css"
import casaPiletaLista2 from "../img/casaPiletaLista2.jpg"
import pileLista from "../img/pileLista.jpeg"
import bordeate from "../img/bordeate.jpg"

function CarouselFadeExample() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="contenedorImgWe"
            src={casaPiletaLista2}
            alt="primera foto"
          />
          <Carousel.Caption>
            <h3 className='tituloCarrusel'>DECK ATERMICO</h3>
            <p className='contenedorTextoWe'> Los pisos de listones tienen todas las propiedades del piso atérmico.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="contenedorImgWe"
            src={pileLista}
            alt="segunda foto"
          />
  
          <Carousel.Caption>
            <h3 className='tituloCarrusel'>BORDES ATERMICOS</h3>
            <p className='contenedorTextoWe'>La porosidad previene deslizamientos brindando mayor seguridad.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="contenedorImgWe"
            src={bordeate}
            alt="Tercera foto"
          />
  
          <Carousel.Caption>
            <h3 className='tituloCarrusel'>AQUAVATIONS</h3>
            <p className='contenedorTextoWe'>
            Revolucionario revestimiento in situ, elegante, resistente y suave.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
          export default CarouselFadeExample;