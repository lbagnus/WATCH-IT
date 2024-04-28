import React from 'react';
import { useState, useEffect } from 'react';
import GridImages from './GridImages';
import { useLocation } from 'react-router-dom';


const Generos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagenesArray, setImagenesArray] = useState([]);
  const location = useLocation();
  const { id } = location.state || {};

  useEffect(() => {
    const cargarGenero = async () => {
      try {
        // Definir la URL dependiendo del género (id)
        let url;
        if (id === 1) {
          url = 'https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=18&language=es-ES';
        } else if (id === 2) {
          url = 'https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=28&language=es-ES';
        } else if (id === 3) {
          url = 'https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=10749&language=es-ES';
        }else if (id === 4) {
          url = 'https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=16&language=es-ES';
        }else if (id === 5) {
          url = 'https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=27&language=es-ES';
        }else if (id === 6) {
          url = 'https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=53&language=es-ES';
        }

        

        const response = await fetch(url);
        const datos = await response.json();

        // Guardar los resultados en el estado
        setData(datos.results);
        console.log(datos.result)

        // Extraer las imágenes de las películas
        const imagenesArray = datos.results.map(pelicula => {
          // Verificar que poster_path existe antes de formar la URL de la imagen
          if (pelicula.poster_path) {
            return `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
          } else {
            return null; // O un valor predeterminado si prefieres
          }
        }).filter(Boolean); // Eliminar valores nulos

        setImagenesArray(imagenesArray);

      } catch (error) {
        //console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarGenero();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  const obtenerGenero = (id) => {
    switch (id) {
        case 1:
            return 'Drama';
        case 2:
            return 'Acción';
        case 3:
            return 'Romance';
        case 4:
            return 'Animación';
        case 5:
            return 'Terror';
        case 6:
            return 'Suspenso';
        default:
            return 'Desconocido'; // O cualquier otra opción por defecto
    }
}; const genero = obtenerGenero(id)


  return (
    <div>
      <h2> Películas de {genero} </h2>
      <GridImages imagenes={imagenesArray} />
    </div>
  );
};

export default Generos;
