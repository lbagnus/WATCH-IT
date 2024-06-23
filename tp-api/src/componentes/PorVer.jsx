import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GridImages from './GridImages'; // Asegúrate de importar el componente correctamente

const PorVer = () => {
  const [porVerPelis, setPorVerPelis] = useState([]);
  const id_usuario = localStorage.getItem('usuarioId'); // Obtener el ID del usuario logueado

  useEffect(() => {
    const fetchPorVerPelis = async () => {
      try {
        const response = await axios.get('http://localhost:3000/peliculas', {
          params: {
            estado: 'PorVer',
            id_usuario: id_usuario
          }
        });

        // Configura las películas para ver
        setPorVerPelis(response.data);

        // Imprime la respuesta
        console.log('Lista:', response.data);
      } catch (error) {
        // Manejo del error
        console.error('Error al obtener películas por ver:', error.message || error);
      }
    };

    if (id_usuario) {
      fetchPorVerPelis(); // Llama a la función solo si id_usuario está definido
    }
  }, [id_usuario]); // Ejecuta useEffect cuando id_usuario cambia

  return (
    <div>
      <h2>Películas Por Ver</h2>
      <GridImages 
        imagenes={porVerPelis.map(pelicula => `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`)} 
        peliObjeto={porVerPelis} 
        mostrarBotonAgregar={false} // No mostrar el botón en la lista "Por Ver"
      />
    </div>
  );
};

export default PorVer;








