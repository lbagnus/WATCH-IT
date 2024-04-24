import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

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
        <SwiperSlide id='SwiperSlideEstilo' spaceBetween={0} key={index}>
          <img src={imagen} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ListaContenidos;


