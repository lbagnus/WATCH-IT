import React from 'react';
import GridImages from './GridImages';
import imagen1 from '../imagenes/logos/imagen1.jpg';
import avatar from '../imagenes/peliculas/avatar-portada.jpg';
import gato from '../imagenes/peliculas/gatoconbotas (1).jpg';
import frogs from '../imagenes/peliculas/frogs.jpg';
import thor from '../imagenes/peliculas/thor.jpg';

const title = 'TRENDING'
const imageUrls = [
  imagen1,
  avatar,
  gato,
  thor,
  frogs,
  frogs,
  frogs
]

const MisListas = () => {
  return (
    <GridImages imagenes={imageUrls} titulo={title}/>
  )
}

export default MisListas
