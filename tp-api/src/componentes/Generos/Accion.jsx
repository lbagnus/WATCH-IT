import React from 'react';
import { useState, useEffect } from 'react';
import GridImages from '../GridImages';

const Accion = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagenesArrayAccion, setImagenesAccion] = useState([]);


  useEffect(() => {
    const cargarGeneroA = async () => {
      try {
        const Accion = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=28&language=es-ES');
        
        const datosAccion = await Accion.json();
      
        setData(datosAccion.results); // Asegúrate de acceder a 'results' que contiene la lista de películas
       console.log(datosAccion)

        // Extraer las imágenes de las películas y almacenarlas en el array
        const imagenesArrayAccion = datosAccion.results.map(Accion => {
          const urlImagenA = `https://image.tmdb.org/t/p/w500/${Accion.poster_path}`;//CAMI "W500" EN EL PATH ES EL TAMANIO DE LA IMAGEN POR SI TE SIRVE
          return urlImagenA;
          
        })
        
        setImagenesAccion(imagenesArrayAccion);

        } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarGeneroA();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }
  



  return (
    <div>
      <h2> Acción </h2>
     <GridImages imagenes={imagenesArrayAccion}/>
    </div>
  )
}

export default Accion