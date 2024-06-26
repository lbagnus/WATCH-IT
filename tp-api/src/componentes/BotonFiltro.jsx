import * as React from 'react';
import GridImages from './GridImages';
import { Await, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const filtrarPeliculasPorIdioma = (idioma, peliculas) => {

       const resultadoIngles = peliculas.map(pelicula => { 
         if (pelicula.original_language === "en") {
           return pelicula;
         } })
  
        const resultadoEspañol = peliculas.map(pelicula => { 
         if (pelicula.original_language === "es") {
           return pelicula;
         } })

         const resultadoAntigua = peliculas.map(pelicula => {         
          if (pelicula.release_date.substring(0, 4) < 2000) {
            return pelicula;
          } })
          const resultadoReciente = peliculas.map(pelicula => {         
            if (pelicula.release_date.substring(0, 4) >= 2000) {
              return pelicula;
            } })

         if(idioma === "Ingles"){
          return(resultadoIngles)
         }else if(idioma === "Español"){
          return (resultadoEspañol)
        }else if(idioma === "Antigua"){
          return (resultadoAntigua)
        }else if(idioma === "Reciente"){
          return (resultadoReciente)
        }else if(idioma === "None"){
          return (peliculas)

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
    var filtro = filtrarPeliculasPorIdioma(idioma, peliculas);
    useEffect(() => {
      
      const resultado = filtro
      var imagenesResultados = resultado
        .filter(pelicula1 => pelicula1) // Filtra los elementos undefined
        .map(pelicula1 => {
          // Verificar si poster_path está definido antes de acceder a él
          const urlImagenP = pelicula1.poster_path ? `https://image.tmdb.org/t/p/w500/${pelicula1.poster_path}` : ''; // O un valor predeterminado si prefieres
          return urlImagenP;
        });
      setImagenes(imagenesResultados);
    }, [filtro, genero]);
  
    // El return debe estar fuera del useEffect
    return (
      <div>
        <h2 className='tituloGenero'> Películas de {genero} </h2> 
       
        <GridImages imagenes={imagenesResultados} peliObjeto={peliculas} genero = {genero} />
      </div>
    );
  };

  export default BotonFiltro;