import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { Navigation } from 'swiper/modules';
import Pelicula from './Pelicula';

function ListaContenidos({imagenes}, {peliObjeto}) {
  

  const handlePelicula = (imagenPeli) => {
    console.log('Contenido de peliObjeto:', peliObjeto);

    // Utiliza find para buscar la película que coincida con la imagen proporcionada
    const peliculaCorrespondiente = peliObjeto.find(pelicula => pelicula.poster_path === imagenPeli);
    
    if (peliculaCorrespondiente) {
        // Si se encuentra una película que coincida, renderiza el componente Pelicula
        // Puedes usar el componente Pelicula como desees
        // Por ejemplo, podrías llamar a una función para mostrar la película o realizar alguna acción
        return <Pelicula objeto={peliculaCorrespondiente} />;
    } else {
        console.log('No se encontró ninguna película que coincida con la imagen proporcionada.');
        return null; // Si no se encuentra, retorna nulo o realiza alguna otra acción
    }
};

 
  return (
    <Swiper id='swiperEstilo'
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={5}
      navigation = {{clickable:true}}
      onSlideChange={() => console.log('Cambio de slide')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imagenes.map((imagen, index) => (
        <SwiperSlide id='SwiperSlideEstilo' spaceBetween={0} key={index} >
          <img src={imagen} alt={`Slide ${index + 1}`} 
          onClick={() => handlePelicula(imagen)}/>
         
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ListaContenidos;


