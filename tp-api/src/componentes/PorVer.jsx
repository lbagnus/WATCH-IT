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

  // Función para manejar la eliminación de una película
  const eliminarPelicula = async (idPelicula) => {
    try {
      const response = await axios.delete(`http://localhost:3000/peliculas/${idPelicula}`);
      console.log('Respuesta del servidor al eliminar película:', response.data);

      // Actualiza el estado para reflejar la eliminación en la interfaz
      setPorVerPelis((prevPelis) => prevPelis.filter((peli) => peli.id !== idPelicula));
    } catch (error) {
      console.error('Error al eliminar película:', error.message || error);
    }
  };

  return (
    <div>
      <h2>Películas Por Ver</h2>
      {porVerPelis.length === 0 ? (
        <p>No hay películas disponibles</p>
      ) : (
        <GridImages
          imagenes={porVerPelis.map(pelicula => `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`)}
          peliObjeto={porVerPelis}
          mostrarBotonAgregar={false} // No mostrar el botón en la lista "Por Ver"
          onEliminarPelicula={eliminarPelicula} // Asegúrate de pasar correctamente la función eliminarPelicula
        />
      )}
    </div>
  );
};

export default PorVer;















