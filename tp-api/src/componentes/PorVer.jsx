import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const PorVer = () => {
  const location = useLocation();
  const estado = 'PorVer'
  const [porVerPelis, setPorVerPelis] = useState([]);

  const id_usuario = localStorage.getItem('usuarioId'); // Obtener el ID del usuario logueado

 const fetchPorVerPelis = async (id_usuario,estado) => {
    try {
      const response = await axios.get(`http://localhost:3000/peliculas/${encodeURIComponent(estado)}/${id_usuario}`);
      setPorVerPelis(response.data);
      console.log('lista', response.data);
    } catch (error) {
      console.error('Error al obtener películas por ver:', error);
    }
  };

 
  fetchPorVerPelis(id_usuario,estado);



  return (
    <div>
      <h2>Películas Por Ver</h2>
      {/*<ul>
        {porVerPelis.map((pelicula, index) => (
          <li key={index}>
            <img src={pelicula.poster_path} alt={`Poster de ${pelicula.title}`} />
            <p>{pelicula.title}</p>
          </li>
        ))}
      </ul>*/}
    </div>
  );
};

export default PorVer;
