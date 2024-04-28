import React from "react";
import Portada from "./Portada";
import padrino from "../imagenes/peliculas/el_padrino_poster.jpg";
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




var titulo = "El padrino";
var puntaje = "4.7";
var anio = "1972";
var tipo = "Drama";
var desc_padrino = "En el verano de 1945, se celebra la boda de Connie (Talia Shire) y Carlo Rizzi (Gianni Russo). Connie es la única hija de Don Vito Corleone (Marlon Brando), jefe de una de las familias que ejercen el mando de la Cosa Nostra en la ciudad de Nueva York. Don Vito además tiene otros tres hijos: su primogénito Sonny (James Caan), el endeble Fredo (John Cazale) y el más joven se todos, Michael (Al Pacino), un marine condecorado por su lucha en la Segunda Guerra Mundial que acaba de regresar a su hogar en Nueva York. Por designios de la fortuna, Michael terminará llevando la vida que no deseaba, tomando las riendas del negocio familiar, cambiando su moral y sus valores, para defender a toda costa a su familia.";
var nombrereparto1 = "Sandra Bullock"
var nombrereparto2 = "Sandra Bullock"
var nombrereparto3 = "Sandra Bullock"
var nombrereparto4 = "Sandra Bullock"
var nombredirector1 = "Sandra Bullock"
var nombredirector2 = "Sandra Bullock"

const Pelicula = ({objeto}) => {
  return (
    <div className="portada">
      <Portada
        title={objeto.original_title}
        puntaje={objeto.vote_average}
        anio={objeto.release_date}
        tipo={tipo}
        imagen={padrino}
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


