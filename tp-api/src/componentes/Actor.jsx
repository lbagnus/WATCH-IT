import React from "react";
import Portada from "./Portada";
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

 
    useEffect(() => {
        const obtenerDatos = async () => {
          try{
          const actor = await fetch('https://api.themoviedb.org/3/person/${objeto.id}?api_key=7d453285a143f326ed0b2747103b04c1&language=es')
        
          const datosActor = await actor.json();
          setData(datosActor.results);

          

          

         
          

        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      }; obtenerDatos();
    }, []);
   

   
  
  
  return (
    <div className="portadaActor">
      <h1>holaaaaaaaa</h1>
    </div>
  );
};
export default Actor;