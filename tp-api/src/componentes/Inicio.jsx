import React from "react";
import imagen1 from '../imagenes/logos/imagen1.jpg';
import avatar from '../imagenes/peliculas/avatar-portada.jpg';
import gato from '../imagenes/peliculas/gatoconbotas (1).jpg';
import frogs from '../imagenes/peliculas/frogs.jpg';
import thor from '../imagenes/peliculas/thor.jpg';
import intensamente from '../imagenes/peliculas/intensamente (1).jpg';
import jdeep from '../imagenes/actores/jdeep-modified.png';
import imagen3 from '../imagenes/logos/Imagen3.jpg';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CarruselAutomatico from "./Carrusel";
import ListaContenidos from "./ListaContenidos";

var texto1 = "Hola"


const imagenesSet1 = [
  imagen1,
  avatar,
  gato,
  thor,
  frogs,
  frogs,
  frogs
];
const imagenesSet2 = [
  jdeep,
  jdeep,
  jdeep,
  jdeep,
  jdeep,
  jdeep,
  jdeep
];

const imagenesSet3 = [
  imagen3,
  imagen3,
  imagen3
  
];

const imagenesSet4 = [
  intensamente,
  thor,
  
];

const textoSet1 = [
  texto1,
  texto1,
  texto1,
  texto1,
  texto1
];


const Inicio = () => {
  return (
    <main className="main-inicio">
      <div className="CarruselPelis">
        <CarruselAutomatico />
      </div>

      <div className="botones-inicio">
        <Stack spacing={8} direction="row">
          <Button className="boton-genero" variant="outlined" >
            Trending
          </Button>
          <Button className="boton-genero" variant="outlined">
            Acción
          </Button>
          <Button className="boton-genero" variant="outlined">
            Romance
          </Button>
          <Button className="boton-genero" variant="outlined">
            Animación
          </Button>
          <Button className="boton-genero" variant="outlined">
            Terror
          </Button>
          <Button className="boton-genero" variant="outlined">
            Drama
          </Button>
          <Button className="boton-genero" variant="outlined">
            Suspenso
          </Button>
        </Stack>
      </div>

      <div className="lista-contenidos">
        <h3 className="tituloListas">Trending</h3>
        <ListaContenidos className="Lista" imagenes={imagenesSet1} />
       
      </div>

      <div className="lista-contenidos2">
        <h3 className="tituloListas">Actores destacados</h3>
        <ListaContenidos imagenes={imagenesSet2} />
      </div>

      <div className="lista-contenidos">
        <h3 className="tituloListas">Proximamente en cines</h3>
        <ListaContenidos imagenes={imagenesSet1} />
      </div>

      <div className="lista-contenidos2">
        <h3 className="tituloListas">Directores del momento</h3>
        <ListaContenidos imagenes={imagenesSet2}  />
        
      </div>

    </main>
  );
};

export default Inicio;
