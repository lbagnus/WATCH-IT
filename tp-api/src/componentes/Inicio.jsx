import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CarruselAutomatico from "./Carrusel";
import ListaContenidos from "./ListaContenidos";
import { Await, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import carrusel1 from '../imagenes/peliculas/carruselposta1.jpg'
import carrusel2 from '../imagenes/peliculas/carrusel2.jpg'
import carrusel3 from '../imagenes/peliculas/carrusel3.jpg'
import carrusel4 from '../imagenes/peliculas/carrusel4.jpg'
import carrusel5 from '../imagenes/peliculas/carrusel5.jpg'
import carrusel6 from '../imagenes/peliculas/carrusel6.jpg'
import carrusel7 from '../imagenes/peliculas/carrusel7.jpg'



//const navigate = useNavigate();
const Inicio = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imagenesArrayPopulares, setImagenesTrending] = useState([]);
  const [imagenesArrayCines, setImagenesCines] = useState([]);
  const [imagenesArrayActores, setImagenesActores] = useState([]);
  const imagenesArrayCarrusel =[carrusel1, carrusel2, carrusel3, carrusel4, carrusel5, carrusel6, carrusel7];
  const [objetoPelicula, setObjetoPelicula] = useState([]);
  const [objetoPelicula2, setObjetoPelicula2] = useState([]);
  const [objetoActor ,setObjetoActor] = useState([]);
  //const [imagenesArrayDirectores, setImagenesDirectores] = useState([]);
  
  useEffect(() => {
    const cargarPeliculasInicio = async () => {
      try { 
        const populares = await fetch('http://api.themoviedb.org/3/movie/popular?api_key=7d453285a143f326ed0b2747103b04c1&language=es-ES');
        const upcoming = await fetch ('https://api.themoviedb.org/3/movie/top_rated?api_key=7d453285a143f326ed0b2747103b04c1&language=es-ES');
        const actores = await fetch ('https://api.themoviedb.org/3/person/popular?api_key=7d453285a143f326ed0b2747103b04c1&language=es-ES');
        //const directores = await fetch('https://api.themoviedb.org/3/person?api_key=7d453285a143f326ed0b2747103b04c1&language=es-ES') //no hay directores

        const datosPopulares = await populares.json();
        const datosCines = await upcoming.json();
        const datosActores = await actores.json();
        //const datosDirectores = await directores.json();
       
        setData(datosPopulares.results); // Asegúrate de acceder a 'results' que contiene la lista de películas
        setData(datosCines.results);
        setData(datosActores.results);
        console.log('actores', datosActores.results)
        //setData(datosDirectores.results);
        

        const objetoPelicula = datosPopulares.results
        setObjetoPelicula(objetoPelicula)

        const objetoPelicula2 = datosCines.results
        setObjetoPelicula2(objetoPelicula2)

        const objetoActor = datosActores.results
        setObjetoActor(objetoActor)


        // Extraer las imágenes de las películas y almacenarlas en el array
        const imagenesArrayPopulares = datosPopulares.results.map(pelicula1 => {
          const urlImagenP = `https://image.tmdb.org/t/p/w500/${pelicula1.poster_path}`;//CAMI "W500" EN EL PATH ES EL TAMANIO DE LA IMAGEN POR SI TE SIRVE
          return urlImagenP;
        })
        
        /*const imagenesArrayCarrusel = datosPopulares.results.map(pelicula1 => {
          const urlImagenC = `https://image.tmdb.org/t/p/w500/${pelicula1.backdrop_path}`;//CAMI "W500" EN EL PATH ES EL TAMANIO DE LA IMAGEN POR SI TE SIRVE
          return urlImagenC;
        })
          
        setImagenesCarrusel(imagenesArrayCarrusel)

         const imagenesArrayCarrusel = [carrusel1, carrusel2]*/
        
        setImagenesTrending(imagenesArrayPopulares);

        const imagenesArrayCines = datosCines.results.map(pelicula2 => {
          const urlImagenU = `https://image.tmdb.org/t/p/w500/${pelicula2.poster_path}`;
          return urlImagenU;
        })
        setImagenesCines(imagenesArrayCines);

        const imagenesArrayActores = datosActores.results.map(actor => {
          const urlImagenA = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
          return urlImagenA;
          
        })
        setImagenesActores(imagenesArrayActores);

       /* const imagenesArrayDirectores = datosDirectores.results.map(director => {
          const urlImagenP = `https://image.tmdb.org/t/p/w500/${director.profile_path}`;
          return urlImagenP;
        })
        setImagenesDirectores(imagenesArrayDirectores);*/
        

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
  
  
  const handleDrama = () =>{
    navigate('/Generos', { state: { id: 1 } })
    
  };

  const handleAccion = () =>{
    navigate('/Generos', { state: { id: 2 } })
    
  };

  const handleRomance = () =>{
    navigate('/Generos', { state: { id: 3 } })
    
  };

  const handleAnimacion = () =>{
    navigate('/Generos', { state: { id: 4 } })
   
    
    
  };

  const handleTerror = () =>{
    navigate('/Generos', { state: { id: 5 } })
  
    
  };

  const handleSuspenso = () =>{
    navigate('/Generos', { state: { id: 6 } })
   
    
  };
  
  return (
      
   <main className="main-inicio">
      <div className="CarruselPelis">
        <CarruselAutomatico imagenes = {imagenesArrayCarrusel} />{/*cambiar fotos*/}
      </div>

      <div className="botones-inicio">
        <Stack spacing={8} direction="row">
    
          <Button className="boton-genero" variant="outlined" onClick={handleAccion}>
            Acción
          </Button>
          <Button className="boton-genero" variant="outlined" onClick={handleRomance}>
            Romance
          </Button>
          <Button className="boton-genero" variant="outlined" onClick={handleAnimacion}>
            Animación
          </Button>
          <Button className="boton-genero" variant="outlined" onClick={handleTerror}>
            Terror
          </Button>
          <Button className="boton-genero" variant="outlined" onClick={handleDrama}>
            Drama
          </Button>
          <Button className="boton-genero" variant="outlined" onClick={handleSuspenso}>
            Suspenso
          </Button>
        </Stack>
      </div>
      
      <div className="lista-contenidos">
        
        <h3 className="tituloListas">Top 10 peliculas del momento</h3>
        <ListaContenidos className="Lista" imagenes={imagenesArrayPopulares} peliObjeto={objetoPelicula}  />
      </div>
 
      <div className="lista-contenidos">
        <h3 className="tituloListas">Actores destacados</h3>
        <ListaContenidos imagenes={imagenesArrayActores}  peliObjeto={objetoActor}/>
      </div>

      <div className="lista-contenidos">
        <h3 className="tituloListas">Proximamente en cines</h3>
          <ListaContenidos imagenes={imagenesArrayCines} peliObjeto={objetoPelicula2}/>
      </div>

      {/*<div className="lista-contenidos">
        <h3 className="tituloListas">Directores del momento</h3>
       <ListaContenidos imagenes={imagenesArrayDirectores}/>
        
      </div>*/}

    </main>
  );
};


export default Inicio;
