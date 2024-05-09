import React from "react";
import PortadaActor from "./PortadaActor";
import { useLocation } from 'react-router-dom';
import star from "../imagenes/iconitos/star.png";
import BotonGuardado from "./BotonGuardado";
import Rating from '@mui/material/Rating';

import { Await, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';




const Actor = () => {
  const location = useLocation();
  const objeto = location.state?.objeto;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [arrayObjetoGenero, setObjetoGenero] = useState([]);
  const [imagenS, setImagenesSimilares] = useState([]);
  const [perfilActor, setImagenActor] = useState([]);
  const [perfilDirec, setImagenDir] = useState([]);
  const [nameActor, setNameAct] = useState([]);
  const [nameDir, setNameDir] = useState([]);
  const [arraySimilares, setSimilares] = useState([]);
  const [infoActor, setActor] = useState([]);

 
    useEffect(() => {
      window.scrollTo(0, 0); // Esta línea hace que la página se desplace hacia arriba cuando se carga
      const obtenerDatos = async () => {
        try {
          if(objeto.known_for_department=== "Acting"){
          const actor = await fetch(`https://api.themoviedb.org/3/person/${objeto.id}?api_key=7d453285a143f326ed0b2747103b04c1&language=es`);
          const datosActor = await actor.json();
          setActor(datosActor);
          console.log("Esto es:", datosActor);
        }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      
      
      }; obtenerDatos();
    }, []);
   
    const imagenesArrayPopulares = objeto.known_for.map(pelicula1 => {
      const urlImagenP = `https://image.tmdb.org/t/p/w500/${pelicula1.poster_path}`;//CAMI "W500" EN EL PATH ES EL TAMANIO DE LA IMAGEN POR SI TE SIRVE
      return urlImagenP;
    })
     
          
  
  
  return (
    <div className="portadaActor">
      <PortadaActor
        title = {objeto.name}
        perfil={`https://image.tmdb.org/t/p/w500/${objeto.profile_path}`}
        bibliografia={infoActor.biography}
        objetoSimilares = {objeto.known_for}
        similares = {imagenesArrayPopulares}
        
      />
    </div>
  );
};
export default Actor;