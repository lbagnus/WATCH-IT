import React from 'react';
import { useState, useEffect } from 'react';
import GridImages from '../GridImages';

const Romance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagenesArrayRomance, setImageneRomance] = useState([]);


  useEffect(() => {
    const cargarGeneroR = async () => {
      try {
        const Romance = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=18&language=es-ES');
        
        const datosRomance = await Romance.json();
      
        setData(datosRomance.results); // Asegúrate de acceder a 'results' que contiene la lista de películas
       console.log(datosRomance)

        // Extraer las imágenes de las películas y almacenarlas en el array
        const imagenesArrayRomance = datosRomance.results.map(Romance => {
          const urlImagenR = `https://image.tmdb.org/t/p/w500/${Romance.poster_path}`;//CAMI "W500" EN EL PATH ES EL TAMANIO DE LA IMAGEN POR SI TE SIRVE
          return urlImagenR;
          
        })
        
        setImageneRomance(imagenesArrayRomance);

        } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarGeneroR();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }
  



  return (
    <div>
      <h2> Romance </h2>
     <GridImages imagenes={imagenesArrayRomance}/>
    </div>
  )
}

export default Romance