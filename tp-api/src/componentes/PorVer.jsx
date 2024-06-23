import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PorVer = () => {
  const [porVerPelis, setPorVerPelis] = useState([]);
  const id_usuario = localStorage.getItem('usuarioId');

  useEffect(() => {
    const fetchPorVerPelis = async () => {
      try {
        console.log('Obteniendo películas con estado:', 'PorVer', 'y id_usuario:', id_usuario);
        const response = await axios.get('http://localhost:3000/peliculas', {
          params: {
            estado: 'PorVer',
            id_usuario: id_usuario
          }
        });
        setPorVerPelis(response.data);
        console.log('Lista de películas por ver:', response.data);
      } catch (error) {
        console.error('Error al obtener películas por ver:', error.message || error);
      }
    };

    if (id_usuario) {
      fetchPorVerPelis();
    } else {
      console.error('ID de usuario no encontrado en localStorage');
    }
  }, [id_usuario]);

  return (
    <div>
      <h2>Películas Por Ver</h2>
      <ul>
        {porVerPelis.map((pelicula, index) => (
          <li key={index}>
            <img src={pelicula.poster_path} alt={`Poster de ${pelicula.title}`} />
            <p>{pelicula.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PorVer;
