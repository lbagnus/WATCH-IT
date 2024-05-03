import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GridImages from './GridImages';

const PorVer = () => {
    const location = useLocation();
    const objeto = location.state?.objeto;
    const [verImagenes, setVerImagenes] = useState([]);
    const [verObjeto, setVerObjeto] = useState([]);
   

    useEffect(() => {
        const verObjeto = (objeto => {
            // Verificar que poster_path existe antes de formar la URL de la imagen
            if (objeto.poster_path) {
              return objeto;
            } else {
              return null; // O un valor predeterminado si prefieres
            }
          })
    
          setVerObjeto(verObjeto);
    
        const verImagenes = (objeto => {
            // Verificar que poster_path existe antes de formar la URL de la imagen
            if (objeto.poster_path) {
              return `https://image.tmdb.org/t/p/w500/${objeto.poster_path}`;
            } else {
              return null; // O un valor predeterminado si prefieres
            }
          })
    
          setVerImagenes(verImagenes);
           
        
    }, []);

    return (
        <div>
            <GridImages imagenes={verImagenes} peliObjeto={verObjeto} />
        </div>
    );
}

export default PorVer;