import React from "react";
//import ListaContenidos from "./ListaContenidos";

const InfoDirector = ({ imagen, nombre_director, desc_director }) => {
  return (
    <div className='pantalla-pelicula'>
      <div className='Contenedor1'>
        <h1>{nombre_director}</h1>
      </div>
      <div className='contenedor2'>
        <img className='imagen-pelicula' src={imagen} alt="imagen1" />
        <div className='desc'>
          <h5>{desc_director}</h5>
        </div>
      </div>
    </div>
  )
}

export default InfoDirector;
