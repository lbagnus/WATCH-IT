import React from "react";
import { useState, useEffect } from "react";
import GridImages from "./GridImages";
import { useLocation } from 'react-router-dom';

const Buscador = () => {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [arrayDatosBuscados, setDatosBuscados] = useState([]);
  const [objeto, setObjeto] = useState([]);
  const input = location.state?.input;
 
  

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const buscador = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=7d453285a143f326ed0b2747103b04c1&language=es&query=${input}`);

       
        const datosBuscador = await buscador.json();
        setData(datosBuscador.results);
       
     
        const objeto = datosBuscador.results
        setObjeto(objeto)
      
        

        const arrayDatosBuscados = datosBuscador.results.map((dato) => {
          if (dato.poster_path) {
              return `https://image.tmdb.org/t/p/w500/${dato.poster_path}`;
          } else if (dato.profile_path) {
              return `https://image.tmdb.org/t/p/w500/${dato.profile_path}`;
          }
      });

      setDatosBuscados(arrayDatosBuscados);

      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    obtenerDatos();
  });

  return (
<div>
    <GridImages  imagenes={arrayDatosBuscados} peliObjeto={objeto}/>
</div>

  )
  
  
};

export default Buscador;
