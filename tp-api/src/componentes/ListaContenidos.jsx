import React from 'react';
import { useRef } from 'react';


function ListaContenidos({ imagenes }) {
  const contenedorRef = useRef(null);

  const scrollDerecha = () => {
    if (contenedorRef.current) {
      contenedorRef.current.scrollLeft += 100; // Cambia este valor según lo desees
     
    }
  };

  const scrollIzquierda = () => {
    if (contenedorRef.current) {
      contenedorRef.current.scrollLeft -= 100; // Cambia este valor según lo desees
    }
  };

  return (
    <div className='fila-imagenes-container' ref={contenedorRef} >
      <div className="fila-imagenes" >
        {imagenes.map((imagen, index) => (
          <img key={index} src={imagen} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
      <button onClick={scrollIzquierda}>Desplazar Izquierda</button>
      <button onClick={scrollDerecha}>Desplazar Derecha</button>
    </div>
    
  );
}

export default ListaContenidos;
