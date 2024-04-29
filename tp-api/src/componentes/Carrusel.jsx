import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

function CarruselAutomatico({imagenes}) {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600, // Cambia la velocidad de cambio de las imágenes (en milisegundos)
    arrows: false,
  };

  return (
    <Slider className='carrusel' {...settings}>
      {imagenes.map((url, index) => (
        <div key={index} className='imgcontenedorcarrusel'>
          <img className='imagenCarrusel' src={url} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </Slider> // HACER EL CAMBIO EN EL IMPORT DE LAS IMAGENES
  );
}

export default CarruselAutomatico;