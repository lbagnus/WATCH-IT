import React, { useContext,useState, useEffect } from "react";
import GridImages from "./GridImages";
import { useLocation } from "react-router-dom";
import { DataContext } from "./DataContext";

const PorVer = () => {
    const location = useLocation();
    const objetoPelicula = location.state?.objeto;
    const  {porver,setPorver} = useContext(DataContext)
    const  {porVerPoster,setPorVerPoster} = useContext(DataContext)

    useEffect(() => {
        const addToPorVer = (objetoPelicula) => {
            const check = porver.every(item =>{
                setPorver([...porver,item])
              //return item.id !== objetoPelicula.id
            })
            console.log('check',check)
            if (check) {
              setPorver([...porver,objetoPelicula])
            }else{
              alert("This movie is already added")
            }
            }
            addToPorVer(objetoPelicula);
            console.log(porver)

            const addToPorVerPoster = (objetoPelicula) => {
                const check2 = porVerPoster.every(item => {
                   const poster = item.poster_path
                   setPorVerPoster([...porVerPoster, poster]);
                return item.id !== objetoPelicula.id
                });

                if (check2) {
                    const nuevaPeliculaConPoster = {
                        id: objetoPelicula.id,
                        poster_path: objetoPelicula.poster_path
                    };
                    setPorVerPoster([...porVerPoster, nuevaPeliculaConPoster]);
                } else {
                    // Mostramos una alerta si la película ya está agregada.
                    alert("This movie is already added");
                }
                }
                addToPorVerPoster(objetoPelicula);
    }, []);


    return (
        <div>
           <GridImages imagenes={porVerPoster} peliObjeto={porver} />
        </div>
    );
};

export default PorVer;

