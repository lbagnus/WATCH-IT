import React from 'react';
import { useState, useEffect } from 'react';
import GridImages from '../GridImages';

const Drama = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagenesArrayDrama, setImagenesDrama] = useState([]);


  useEffect(() => {
    const cargarGenero = async () => {
      try {
        const Drama = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7d453285a143f326ed0b2747103b04c1');
        
        const datosDrama = await Drama.json();
      
        setData(datosDrama.results); // Asegúrate de acceder a 'results' que contiene la lista de películas
       console.log(datosDrama)

        // Extraer las imágenes de las películas y almacenarlas en el array
        const imagenesArrayDrama = datosDrama.map(Drama => {
          /*const urlImagenD = `https://image.tmdb.org/t/p/w500/${Drama.poster_path}`;//CAMI "W500" EN EL PATH ES EL TAMANIO DE LA IMAGEN POR SI TE SIRVE
          return urlImagenD;*/
          console.log(Drama.name)
        })
        
        //setImagenesDrama(imagenesArrayDrama);

        } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarGenero();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }
  



  return (
    <div>
        <div>
        {Array.isArray(data) ? (
            data.map((item, index) => (
                <div key={index}>
                    {/* Renderiza cada elemento aquí */}
                </div>
            ))
        ) : (
            <div>No hay datos disponibles</div>
        )}
    </div>
      {/*<GridImages imagenes={imagenesArrayDrama}/>*/}
    </div>
  )
}

export default Drama