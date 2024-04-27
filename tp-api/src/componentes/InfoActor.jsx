import React from "react";
import ListaContenidos from "./ListaContenidos";

const InfoActor = ({imagen, nombre_actor, desc_actor}) => {
    return ( 
        <div className='pantalla-pelicula'>
            <div className='Contenedor1'>
                <h1>{nombre_actor}</h1>
            </div>  
            <div className='contenedor2'>
                <img className='imagen-pelicula' src={imagen} alt="imagen1" />
                <div className='desc'>
                    <h5>{desc_actor}</h5>
                </div>
            </div>
        </div>
    )
}

export default InfoActor;
