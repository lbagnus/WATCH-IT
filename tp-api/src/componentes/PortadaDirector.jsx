import React from 'react';
import ListaContenidos from '../componentes/ListaContenidos';

const PortadaDirectorComponent = ({ title, perfil, bibliografia, similares, objetoSimilares }) => {
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

      <div className="lista-contenidos" id="otralista">
        <h3 className="tituloListas">Peliculas que ha dirigido</h3>
        <ListaContenidos imagenes={similares} peliObjeto={objetoSimilares} />
      </div>
    </div>
  )
}

export default PortadaDirectorComponent;