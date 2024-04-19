import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

function ListaContenidos({ imagenes }) {
  return (
    <Swiper id=''
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={3}
      navigation = {{clickable:true}}
      onSlideChange={() => console.log('Cambio de slide')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imagenes.map((imagen, index) => (
        <SwiperSlide key={index}>
          <img src={imagen} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ListaContenidos;


