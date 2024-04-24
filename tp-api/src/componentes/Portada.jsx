import React from 'react'

const Portada = ({title , puntaje, anio, tipo ,imagen, descripcion, guardadito, estrella}) => {
  return (
    <div className='pantalla-pelicula'>
        <div className='Contenedor1'>
            <h1>{title}</h1>
            <div className='datos-pelicula'>
                <div>{guardadito}</div>
                <img className='estrellita' src={estrella}  alt='img' />
                <h4>{puntaje}</h4>
                <div  className='rayita'></div>
                <h4>{anio}</h4>
                <div  className='rayita'></div>
                <h4>{tipo}</h4>
            </div>
        </div>   
        <div className='contenedor2'>
            <img className='imagen-pelicula' src={imagen} alt="imagen1" />
            <div className='desc'>
            <h5>{descripcion}</h5>
            </div>
          
        </div>
  </div>
    
  )
}

export default Portada;