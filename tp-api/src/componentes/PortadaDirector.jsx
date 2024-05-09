import React from 'react';
import ListaContenidos from '../componentes/ListaContenidos';

const PortadaDirector = ({ title, perfil, bibliografia }) => {
  if (!bibliografia) {
    bibliografia = <p>No hay biografía disponible</p>;
  }

  return (
    <div className='actor-portada'>
      <div className='contenedor1'>
        <h1>{title}</h1>
        <div className='contenedorfotos'>
          <img className='fotoperfil' src={perfil} alt='img' />
          <p>{bibliografia}</p>
        </div>
      </div>

    </div>
  )
}

export default PortadaDirector;