import React from 'react';
import { useState, useEffect } from 'react';
import GridImages from './GridImages';
import { useLocation, useNavigate } from 'react-router-dom'; // Importa useNavigate
import BotonFiltro from './BotonFiltro';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Generos = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagenesArray, setImagenesArray] = useState([]);
  const location = useLocation();
  const [objetoPelicula, setObjetoPelicula] = useState([]);
  const { id } = location.state || {};
  const [botonFiltroResultado, setBotonFiltroResultado] = useState([]);
  const navigate = useNavigate(); // Usa useNavigate para la navegación

  useEffect(() => {
    const cargarGenero = async () => {
      try {
        let url;
        // Definir la URL dependiendo del género (id)
        switch (id) {
          case 1:
            url = 'https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=18&language=es-ES';
            break;
          case 2:
            url = 'https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=28&language=es-ES';
            break;
          case 3:
            url = 'https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=10749&language=es-ES';
            break;
          case 4:
            url = 'https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=16&language=es-ES';
            break;
          case 5:
            url = 'https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=27&language=es-ES';
            break;
          case 6:
            url = 'https://api.themoviedb.org/3/discover/movie?api_key=7d453285a143f326ed0b2747103b04c1&with_genres=53&language=es-ES';
            break;
          default:
            url = '';
            break;
        }

        const response = await fetch(url);
        const datos = await response.json();

        // Guardar los resultados en el estado
        setData(datos.results);

        const objetoPelicula = datos.results;
        setObjetoPelicula(objetoPelicula);

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
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarGenero();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  const handleIdiomaClick = (idioma, genero, peliculas) => {
    // Navegar a la ruta de BotonFiltro con los parámetros
    navigate(`/BotonFiltro?idioma=${idioma}&genero=${genero}&peliculas=${encodeURIComponent(JSON.stringify(peliculas))}`);
    //<BotonFiltro idioma = {idioma} genero={genero} peliculas={peliculas}/>
    
  };

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
  };

  const genero = obtenerGenero(id);

  return (
    <div>
      <div className='contenedorFiltro'>
        <h2 className='tituloGenero'> Películas de {genero} </h2>                       
      </div>
      <GridImages imagenes={imagenesArray} peliObjeto={objetoPelicula} genero = {genero}/>
    </div>
  );
};

export default Generos;

