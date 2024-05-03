import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import Pelicula from "./Pelicula";
import { useState, useEffect } from "react";

function ListaContenidos({ imagenes, peliObjeto }) {
  const navigate = useNavigate();
  const urlBase = "https://image.tmdb.org/t/p/w500/";

  const handlePelicula = (imagenPeli) => {
    console.log("Contenido de peliObjeto:", peliObjeto);

    const peliculaCorrespondiente = peliObjeto.find((pelicula) => {
      const urlCompleta = `${urlBase}${pelicula.poster_path}`;
      return urlCompleta === imagenPeli;
    });

    if (peliculaCorrespondiente) {
      navigate("/Pelicula", { state: { objeto: peliculaCorrespondiente } });
    } else {
      const ActorCorrespondiente = peliObjeto.find((Actor) => {
        const urlCompleta = `${urlBase}${Actor.profile_path}`;
        return urlCompleta === imagenPeli;
      });
      
      if (ActorCorrespondiente) {
        navigate("/Actor", { state: { objeto: ActorCorrespondiente } });
      } else {
        console.log(
          "No se encontró ninguna película que coincida con la imagen proporcionada.",
          imagenPeli,
          "aca empieza el obejeto"
        );
        return null; // Si no se encuentra, retorna nulo o realiza alguna otra acción}
      } 
    }
  };

  return (
    <Swiper
      id="swiperEstilo"
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={5}
      navigation={{ clickable: true }}
      onSlideChange={() => console.log("Cambio de slide")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {imagenes.map((imagen, index) => (
        <SwiperSlide id="SwiperSlideEstilo" spaceBetween={0} key={index}>
          <img
            className="imagenSwiper"
            src={imagen}
            alt={`Slide ${index + 1}`} //el estilo de esta clase esta en listas.css
            onClick={() => handlePelicula(imagen)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ListaContenidos;
