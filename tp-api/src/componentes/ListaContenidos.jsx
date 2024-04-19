import React from 'react';
import { useRef } from 'react';
import arrowDerecha from '../imagenes/iconitos/arrowderecha.png';
import arrowIzquierda from '../imagenes/iconitos/arrowizquierda.png';


function ListaContenidos({ imagenes }) {
  const contenedorRef = useRef(null);

  const scrollDerecha = () => {
    if (contenedorRef.current) {
      contenedorRef.current.scrollLeft += 1000; // Cambia este valor según lo desees
     
    }
  };

  const scrollIzquierda = () => {
    if (contenedorRef.current) {
      contenedorRef.current.scrollLeft -= 1000; // Cambia este valor según lo desees
    }
  };

  return (
    <div className='fila-imagenes-container' ref={contenedorRef} >
      <div className="fila-imagenes" >
        {imagenes.map((imagen, index) => (
          <img key={index} src={imagen} alt={`Imagen ${index + 1}`} />
        ))}
       </div>
      <img onClick={scrollIzquierda} src={arrowIzquierda}></img>
      <div className='contenedorBotonDerecha'>
        <img className='botonDerecha' onClick={scrollDerecha} src={arrowDerecha}></img>
      </div>
    </div>
  
    
  );
  
};


export default ListaContenidos;
