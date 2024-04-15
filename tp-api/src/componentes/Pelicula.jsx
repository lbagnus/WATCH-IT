import React from "react";
import Portada from "./Portada";
import padrino from "../imagenes/peliculas/el_padrino_poster.jpg";

var titulo = "El padrino";
var puntaje = "4.7";
var anio = "1972";
var tipo = "Drama";
var desc_padrino = "En el verano de 1945, se celebra la boda de Connie (Talia Shire) y Carlo Rizzi (Gianni Russo). Connie es la única hija de Don Vito Corleone (Marlon Brando), jefe de una de las familias que ejercen el mando de la Cosa Nostra en la ciudad de Nueva York. Don Vito además tiene otros tres hijos: su primogénito Sonny (James Caan), el endeble Fredo (John Cazale) y el más joven se todos, Michael (Al Pacino), un marine condecorado por su lucha en la Segunda Guerra Mundial que acaba de regresar a su hogar en Nueva York. Por designios de la fortuna, Michael terminará llevando la vida que no deseaba, tomando las riendas del negocio familiar, cambiando su moral y sus valores, para defender a toda costa a su familia.";

const Pelicula = () => {
  return (
    <div className="portada">
      <Portada
        title={titulo}
        puntaje={puntaje}
        anio={anio}
        tipo={tipo}
        imagen={padrino}
        descripcion={desc_padrino}/> 
    </div>
  );
};
export default Pelicula;
