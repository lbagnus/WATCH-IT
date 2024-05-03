import React, { useState, useEffect } from "react";
import PortadaDirector from "./PortadaDirector";
import { useLocation } from 'react-router-dom';

const Director = () => {
  const location = useLocation();
  const objeto = location.state?.objeto;
  const [infoDirector, setInfoDirector] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        if(objeto && objeto.known_for_department === "Directing") {
          const dir = await fetch(`https://api.themoviedb.org/3/person/${objeto.id}?api_key=7d453285a143f326ed0b2747103b04c1&language=es`);
          const datosDir = await dir.json();
          console.log("datita" , datosDir)
          setInfoDirector(datosDir);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, [objeto]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="portadaDirector">
      {infoDirector && (
        <PortadaDirector
          title={objeto.name}
          perfil={`https://image.tmdb.org/t/p/w500/${objeto.profile_path}`}
          bibliografia={infoDirector.biography}
          similares={infoDirector.known_for_department === "Directing" ? infoDirector.known_for : []}
          objetoSimilares={objeto.known_for}
        />
      )}
    </div>
  );
};

export default Director;

