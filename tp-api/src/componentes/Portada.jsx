import React from 'react'

const Portada = ({title , puntaje, anio, tipo ,imagen, descripcion}) => {
  return (
    <div className='pantalla-pelicula'>
            <h1>{title}</h1>
            <div className='datos-pelicula'>
                <h4>{puntaje}</h4>
                <div  className='rayita'></div>
                <h4>{anio}</h4>
                <div  className='rayita'></div>
                <h4>{tipo}</h4>
            </div>

            <div className='desc'>
            <h5>{descripcion}</h5>
            </div>
           
        <img className='imagen-pelicula' src={imagen} alt="imagen1" />
  </div>
    
  )
}

export default Portada;