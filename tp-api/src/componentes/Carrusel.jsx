import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

function CarruselAutomatico() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600, // Cambia la velocidad de cambio de las imágenes (en milisegundos)
    arrows: false,
  };

  return (
    <Slider className='carrusel' {...settings}>
      <div className='imgcontenedorcarrusel'>
        <img src={require('../imagenes/peliculas/carrusel 1.jpg')} alt="Imagen 1" className='imgcarrusel'/>
      </div>
      <div>
        <img src={require('../imagenes/peliculas/carrusel 2.jpg')} alt="Imagen 2" className='imgcarrusel'/>
      </div>
      <div>
        <img src={require('../imagenes/peliculas/carrusel 3.jpg')} alt="Imagen 3" className='imgcarrusel'/>
      </div>
    </Slider> // HACER EL CAMBIO EN EL IMPORT DE LAS IMAGENES
  );
}

export default CarruselAutomatico;