import React from 'react'

const Portada = ({title , puntaje, anio, tipo ,imagen, descripcion, guardadito, estrella, puntuacion, otraimagen1, otraimagen2, reparto1, reparto2, reparto3, reparto4, director1, director2, nombrereparto1, nombrereparto2, nombrereparto3, nombrereparto4, nombredirector1, nombredirector2}) => {
  return (
    <div className='pantalla-pelicula'>
        <div className='contenedor0'>
            <div className='Contenedor1'>
                <h1>{title}</h1>
                <div className='datos-pelicula'>
                    <div>{guardadito}</div>
                    <img className='estrellita' src={estrella}  alt='img' />
                    <p>{puntaje}</p>
                    <div  className='rayita'></div>
                    <p>{anio}</p>
                    <div  className='rayita'></div>
                    <p>{tipo}</p>
                </div>
            </div>   
            <div className='contenedor2'>
                <img className='imagen-pelicula' src={imagen} alt="imagen1" />
                <div className='desc'>
                <p>{descripcion}</p>
                </div>
            </div>
        </div>
        <div className='contenedorRepartoDirector'>
            <div className='contenedorReparto' >
                <h4 className='subtitulo'>Reparto</h4>
                <div className='contenedores'>
                        <div className='reparto'>
                            <img  src={reparto1} alt="imagen1" />
                            <h5>{nombrereparto1}</h5>
                        </div>
                        <div className='reparto'>
                            <img  src={reparto2} alt="imagen1" />
                            <h5>{nombrereparto2}</h5>
                        </div>
                        <div className='reparto'>
                            <img  src={reparto3} alt="imagen1" />
                            <h5>{nombrereparto3}</h5>
                        </div>
                        <div className='reparto'>
                            <img  src={reparto4} alt="imagen1" />
                            <h5>{nombrereparto4}</h5>
                        </div>
                </div>
            </div>
            <div className='contenedorDirector' >
                <h4 className='subtitulo'>Dirección</h4>
                <div className='contenedores'> 
                    <div className='reparto'>
                        <img  src={reparto1} alt="imagen1" />
                        <h5>{nombrereparto1}</h5>
                    </div>
                    <div className='reparto'>
                        <img  src={reparto2} alt="imagen1" />
                        <h5>{nombrereparto2}</h5>
                    </div>
                </div>
            </div>     
        </div>
        <div className='contenedorReseñasyotrosbuscan'>
            <div className='contenedorreseñas' >
                <h4 className='subtitulo'>Reseñas</h4>
                <div className='reseña'>
                    <h5>Excelente!</h5>
                    <div className='puntuacion'> {puntuacion}</div>
                    <p>La mejor pelicula que vi en mi vida</p>
                </div>
                <div className='reseña'>
                    <h5>Me gusto!</h5>
                    <div className='puntuacion'> {puntuacion}</div>
                    <p>Pelicula vieja, pero no falla</p>
                </div>
                <div className='reseña'>
                    <h5>Horrible!</h5>
                    <div className='puntuacion'> {puntuacion}</div> 
                    <p>Sin Comentarios</p>
                </div>
            </div>
            <div className='contenedorOtrosBuscan'>
                <h4 className='subtitulo'>Otros también buscan:</h4>
                <div className='contenedorPeliculasOtras'>
                    <img className='imagenotra' src={otraimagen1} alt="imagen1" />
                    <img className='imagenotra' src={otraimagen2} alt="imagen1" />
                </div>
            </div>
        </div>
  </div>
    
  )
}

export default Portada;


