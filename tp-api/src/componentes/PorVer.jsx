import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const PorVer = () => {
  const location = useLocation();
  const { imagen } = location.state || {};
  const [porVerPelis, setPorVerPelis] = useState([]);

  useEffect(() => {
    fetchPorVerPelis();
  }, []);

  const fetchPorVerPelis = async () => {
    {/*try {
      const response = await axios.get('http://localhost:3000/peliculas');
      setPorVerPelis(response.data);
    } catch (error) {
      console.error('Error al obtener películas por ver:', error);
    }*/}
  };

  const agregarPeliculaPorVer = async (imagen) => {
    const id_usuario = localStorage.getItem('usuarioId')
    const poster_path = imagen;
    const estado = 'Por Ver';
    
    try {
      const response = await axios.post ('http://localhost:3000/peliculas', { id_usuario, poster_path, estado })
      console.log('Respuesta del servidor al agregar película:', response.data);
      fetchPorVerPelis();
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un código de error (ej. 4xx, 5xx)
        console.error('Error de respuesta: porver', error.response.data);
    } else if (error.request) {
        // La solicitud fue realizada pero no se recibió respuesta
        console.error('No se recibió respuesta del servidor:', error.request);
    } else {
        // Ocurrió un error durante la configuración de la solicitud
        console.error('Error al configurar la solicitud:', error.message);
    }
    }
  };

  agregarPeliculaPorVer(imagen)
  return (
    <div>
      <h2>Películas Por Ver</h2>
      <ul>
       {/* {porVerPelis.map((pelicula, index) => (
          <li key={index}>
            <img src={pelicula.poster_path} alt={`Poster de ${pelicula.title}`} />
            <p>{pelicula.title}</p>
          </li>
        ))}*/}
      </ul>
    </div>
  );
};

export default PorVer;
