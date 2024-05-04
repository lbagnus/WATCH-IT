import * as React from 'react';
import GridImages from './GridImages';
import { Await, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const filtrarPeliculasPorIdioma = (idioma, peliculas) => {
    console.log("LLEGEU")
    if(idioma === "Ingles"){
        console.log("LLEGUE3")
       const resultado = peliculas.map(pelicula => { 
        console.log("esto el OBJETO PELICULA", pelicula)
         if (pelicula.original_language === "en") {
           return pelicula;
         } })
         return(resultado);
     }else if (idioma === "Español"){
        const resultado = peliculas.map(pelicula => { 
            console.log("esto el OBJETO PELICULA", pelicula)
         if (pelicula.original_language === "es") {
           return pelicula;
         } })
         return(resultado);
     }else {
      return [idioma, peliculas];
    }
  };

  const BotonFiltro = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const idioma = searchParams.get("idioma");
    const genero = searchParams.get("genero");
    const peliculas = JSON.parse(decodeURIComponent(searchParams.get("peliculas")));
    const [imagenesResultados, setImagenes] = useState([]);
  
    useEffect(() => {
      const resultado = filtrarPeliculasPorIdioma(idioma, peliculas);
      console.log("RESULTADO", resultado);
      const imagenesResultados = resultado
        .filter(pelicula1 => pelicula1) // Filtra los elementos undefined
        .map(pelicula1 => {
          // Verificar si poster_path está definido antes de acceder a él
          const urlImagenP = pelicula1.poster_path ? `https://image.tmdb.org/t/p/w500/${pelicula1.poster_path}` : ''; // O un valor predeterminado si prefieres
          return urlImagenP;
        });
      setImagenes(imagenesResultados);
      console.log("estas son las imagenes", imagenesResultados);
    }, []);
  
    // El return debe estar fuera del useEffect
    return (
      <div>
        <h2 className='tituloGenero'> Películas de {genero} </h2>
        <GridImages imagenes={imagenesResultados} peliObjeto={peliculas} />
      </div>
    );
  };

  export default BotonFiltro;