import React from 'react';
import nofoto from '../imagenes/peliculas/nofoto.jpeg'

 function verImagen({imagen}) {
    if (imagen.slice(-4) === "null"){
        imagen = nofoto
    }
    return imagen
}
export default verImagen;