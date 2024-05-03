import { Divider } from '@mui/material';
import React from 'react';
import { Await, useNavigate } from 'react-router-dom';
import ListaContenidos from '../componentes/ListaContenidos'
import GridImages from './GridImages';



const PortadaActor = ({title, perfil, bibliografia, similares, objetoSimilares}) => {
    if(bibliografia=== ""){
        bibliografia = <p>No hay biografía disponible</p>
    }
    return(
    <div className='actor-portada'>
        <div className='contenedor1'>
            <h1>{title}</h1>
            <div className='contenedorfotos'>
                <img className='fotoperfil' src={perfil}  alt='img' />
                <p>{bibliografia}</p>
            </div>
        </div>
        
            <div className="lista-contenidos" id="otralista">
                <h3 className="tituloListas">Peliculas donde aparece</h3>
                <ListaContenidos imagenes={similares}  peliObjeto={objetoSimilares}/>
            </div>
        

    </div>
    )
}

export default PortadaActor;