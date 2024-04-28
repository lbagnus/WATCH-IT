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
import { Await, useNavigate } from 'react-router-dom';
import numero1 from '../imagenes/peliculas/numero1.png'; //no me lo saquen es para un futuro
import Pelicula from "./Pelicula";
import { useState, useEffect } from 'react';

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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagenesArrayPopulares, setImagenesTrending] = useState([]);
  const [imagenesArrayCines, setImagenesCines] = useState([]);
  
  useEffect(() => {
    const cargarPeliculasInicio = async () => {
      try {
        const populares = await fetch('http://api.themoviedb.org/3/movie/popular?api_key=7d453285a143f326ed0b2747103b04c1&language=es-ES');
        const upcoming = await fetch ('https://api.themoviedb.org/3/movie/top_rated?api_key=7d453285a143f326ed0b2747103b04c1&language=es-ES')

        const datosPopulares = await populares.json();
        const datosCines = await upcoming.json();
       
       
        setData(datosPopulares.results); // Asegúrate de acceder a 'results' que contiene la lista de películas
        setData(datosCines.results);

        // Extraer las imágenes de las películas y almacenarlas en el array
        const imagenesArrayPopulares = datosPopulares.results.map(pelicula1 => {
          const urlImagenP = `https://image.tmdb.org/t/p/w500/${pelicula1.poster_path}`;
          return urlImagenP;
        })
        setImagenesTrending(imagenesArrayPopulares);

        const imagenesArrayCines = datosCines.results.map(pelicula2 => {
          const urlImagenU = `https://image.tmdb.org/t/p/w500/${pelicula2.poster_path}`;
          return urlImagenU;
        })
        setImagenesCines(imagenesArrayCines);



      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarPeliculasInicio();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }
  
  return (
      
   <main className="main-inicio">
      <div className="CarruselPelis">
        <CarruselAutomatico />
      </div>

      <div className="botones-inicio">
        <Stack spacing={8} direction="row">
    
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
        <h3 className="tituloListas">Top 10 peliculas del momento</h3>
        <ListaContenidos className="Lista" imagenes={imagenesArrayPopulares} />
      </div>
 
      

     
       
      /*<div className="lista-contenidos2">
        <h3 className="tituloListas">Actores destacados</h3>
        <ListaContenidos imagenes={imagenesSet2} />
      </div>*/

      <div className="lista-contenidos">
        <h3 className="tituloListas">Proximamente en cines</h3>
          <ListaContenidos imagenes={imagenesArrayCines} />
      </div>

      <div className="lista-contenidos2">
        <h3 className="tituloListas">Directores del momento</h3>
        <ListaContenidos imagenes={imagenesSet2}  />
        
      </div>

    </main>
  );
};


export default Inicio;
