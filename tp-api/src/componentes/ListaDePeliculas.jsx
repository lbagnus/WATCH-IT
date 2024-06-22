import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ListaDePeliculas = ({ lista }) => {
  const [peliculas, setPeliculas] = useState([]);
  const location = useLocation();
  const { selectedImage, lista: listaActual } = location.state || {};

  useEffect(() => {
    fetchPeliculas(lista);
  }, [lista]); // Actualizar la lista cuando cambie la prop 'lista'

  const fetchPeliculas = async (lista) => {
    try {
      const response = await axios.get(`http://localhost:3000/peliculas/${lista.toLowerCase()}`);
      setPeliculas(response.data);
    } catch (error) {
      console.error(`Error al obtener películas de la lista ${lista}:`, error);
    }
  };
 
  const agregarPelicula = async () => {
    const poster_path = selectedImage;
    const estado = lista;

    try {
      const response = await axios.post('http://localhost:3000/peliculas', { poster_path, estado });
      console.log('Respuesta del servidor al agregar película:', response.data);
      fetchPeliculas(lista); // Actualizar la lista después de agregar una nueva película
    } catch (error) {
      console.error('Error al agregar película:', error.response ? error.response.data : error.message);
    }
  };

  agregarPelicula();
  return (
    <div>
      <h2>Películas {lista}</h2>
      
      {/*<ul>
        {peliculas.map((pelicula, index) => (
          <li key={index}>
            <img src={pelicula.poster_path} alt={`Poster de ${pelicula.title}`} />
            <p>{pelicula.title}</p>
             
          </li>
        ))}
      </ul>*/}
    </div>
  );
};

// Componentes específicos de lista
const PorVer = () => <ListaDePeliculas lista="Por Ver" />;
//const Preferidas = () => <ListaDePeliculas lista="Preferidas" />;
//const Vistas = () => <ListaDePeliculas lista="Vistas" />;
export default ListaDePeliculas;
export { PorVer};

//Preferidas, Vistas 