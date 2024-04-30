import React from "react";
import Portada from "./Portada";
import { useLocation } from 'react-router-dom';
import star from "../imagenes/iconitos/star.png";
import BotonGuardado from "./BotonGuardado";
import Rating from '@mui/material/Rating';

import { Await, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';




const Pelicula = () => {
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
          const generos = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7d453285a143f326ed0b2747103b04c1&language=es')
          const similar = await fetch (`https://api.themoviedb.org/3/movie/${objeto.id}/similar?api_key=7d453285a143f326ed0b2747103b04c1&language=es`)
          const actoresDir = await fetch (`https://api.themoviedb.org/3/movie/${objeto.id}/credits?api_key=7d453285a143f326ed0b2747103b04c1&language=esAND`)


          const datosGeneros = await generos.json();
          setData(datosGeneros.genres);

          const datosSimilar = await similar.json();
          setData(datosSimilar.results)

          const arraySimilares = datosSimilar.results
          setSimilares(arraySimilares)
         

          const datosactoresDir = await actoresDir.json();
          setData(datosactoresDir.result);
     
         
          const arrayObjetoGenero = datosGeneros.genres.map(genero => {
            const objetoGenero = (genero);
            return objetoGenero;
          })
          setObjetoGenero(arrayObjetoGenero); 

          const imagenS = datosSimilar.results.map(pSimilar =>`https://image.tmdb.org/t/p/w500/${pSimilar.poster_path}`)
          setImagenesSimilares(imagenS);

          const actores = datosactoresDir.cast;
          const crew = datosactoresDir.crew;
          
         const perfilActor = actores.map(actor=> `https://image.tmdb.org/t/p/w500/${actor.profile_path}`)
         setImagenActor(perfilActor)
         const perfilDirec = crew.map(director=> `https://image.tmdb.org/t/p/w500/${director.profile_path}`) //known_for_deparment deberia ser solo 'directing'
         setImagenDir(perfilDirec)
        

         const nameActor = actores.map(actor=> actor.name)
         setNameAct(nameActor)
         const nameDir = crew.map(director=> director.name)
         setNameDir(nameDir)
         console.log(crew)
         
      
      // Establecer el estado de los datos
      setData({ actores, crew });
      

        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      }; obtenerDatos();
    }, []);
   

    const handleGenero = (ids) => {
      for (const id of ids) {
          const generoCorrespondiente = arrayObjetoGenero.find(genero => genero.id === id);

          if (generoCorrespondiente) {
              return generoCorrespondiente.name;
          }
      }
  };
  
  
  return (
    <div className="portada">
      <Portada
        peliObjetoS1 = {arraySimilares[0]}
        peliObjetoS2 = {arraySimilares[1]}
        title={objeto.title}
        puntaje={objeto.vote_average}
        anio={objeto.release_date}
        tipo={handleGenero(objeto.genre_ids)}
        imagen={`https://image.tmdb.org/t/p/w500/${objeto.poster_path}`}
        descripcion={objeto.overview}
        guardadito = <BotonGuardado/>
        estrella = {star}
        puntuacion =  <Rating name="read-only" value={3} readOnly />
        otraimagen1 = {imagenS[0]}
        otraimagen2 = {imagenS[1]} 
        reparto1 = {perfilActor[0]}
        reparto2 = {perfilActor[1]}
        reparto3 = {perfilActor[2]}
        reparto4 = {perfilActor[3]}
        director1 = {perfilDirec[0]}
        director2 = {perfilDirec[11]}
        nombredirector1 = {nameDir[0]}
        nombredirector2 = {nameDir[11]}
        nombrereparto1 = {nameActor[0]}
        nombrereparto2 = {nameActor[1]}
        nombrereparto3 = {nameActor[2]}
        nombrereparto4 = {nameActor[3]}
        /> 
    </div>
  );
};
export default Pelicula;