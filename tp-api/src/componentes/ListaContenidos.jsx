import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { Navigation } from 'swiper/modules';

function ListaContenidos({ imagenes, textos }) {
  
 
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
          <Link to= '/Pelicula'>
          <img src={imagen} alt={`Slide ${index + 1}`}/>
          </Link>
         
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ListaContenidos;


