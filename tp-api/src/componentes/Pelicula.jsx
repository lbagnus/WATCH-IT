import React from "react";
import Portada from "./Portada";
import { useLocation } from 'react-router-dom';
import star from "../imagenes/iconitos/star.png";
import BotonGuardado from "./BotonGuardado";
import Rating from '@mui/material/Rating';
import thor from '../imagenes/peliculas/thor.jpg'
import reparto1 from '../imagenes/actores/jdeep-modified.png'
import reparto2 from '../imagenes/actores/jdeep-modified.png'
import reparto3 from '../imagenes/actores/jdeep-modified.png'
import reparto4 from '../imagenes/actores/jdeep-modified.png'
import director1 from '../imagenes/actores/jdeep-modified.png'
import director2 from '../imagenes/actores/jdeep-modified.png'

var nombrereparto1 = "Sandra Bullock"
var nombrereparto2 = "Sandra Bullock"
var nombrereparto3 = "Sandra Bullock"
var nombrereparto4 = "Sandra Bullock"
var nombredirector1 = "Sandra Bullock"
var nombredirector2 = "Sandra Bullock"

const Pelicula = () => {
  const location = useLocation();
  const objeto = location.state?.objeto;
  console.log('son los objetos',objeto)
  return (
    <div className="portada">
      <Portada
        title={objeto.original_title}
        puntaje={objeto.vote_average}
        anio={objeto.release_date}
        tipo={objeto.genres_ids}//ver tema id genero
        imagen={`https://image.tmdb.org/t/p/w500/${objeto.poster_path}`}
        descripcion={objeto.overview}
        guardadito = <BotonGuardado/>
        estrella = {star}
        puntuacion =  <Rating name="read-only" value={3} readOnly />
        otraimagen1 = {thor}
        otraimagen2 = {thor} 
        reparto1 = {reparto1}
        reparto2 = {reparto2}
        reparto3 = {reparto3}
        reparto4 = {reparto4}
        director1 = {director1}
        director2 = {director2}
        nombredirector1 = {nombredirector1}
        nombredirector2 = {nombredirector2}
        nombrereparto1 = {nombrereparto1}
        nombrereparto2 = {nombrereparto2}
        nombrereparto3 = {nombrereparto3}
        nombrereparto4 = {nombrereparto4}
        /> 
    </div>
  );
};
export default Pelicula;


