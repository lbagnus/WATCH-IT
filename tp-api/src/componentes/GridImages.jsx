import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from 'react-router-dom';

function GridImages({imagenes ,  peliObjeto}) {
  const navigate = useNavigate();
  const urlBase = "https://image.tmdb.org/t/p/w500/"

  const handlePelicula = (imagenPeli) => {
  console.log('Contenido de peliObjeto:', peliObjeto);

  // Utiliza find para buscar la película que coincida con la imagen proporcionada
  const peliculaCorrespondiente = peliObjeto.find(pelicula => {
    const urlCompleta = `${urlBase}${pelicula.poster_path}`;
    return urlCompleta === imagenPeli;
});
    
  
  if (peliculaCorrespondiente) {
      // Si se encuentra una película que coincida, renderiza el componente Pelicula
      // Puedes usar el componente Pelicula como desees
      // Por ejemplo, podrías llamar a una función para mostrar la película o realizar alguna acción
      navigate('/Pelicula', { state: { objeto: peliculaCorrespondiente } });
      //return <Pelicula objeto={peliculaCorrespondiente} />;
  } else {
      console.log('No se encontró ninguna película que coincida con la imagen proporcionada.', imagenPeli ,"aca empieza el obejeto");
      return null; // Si no se encuentra, retorna nulo o realiza alguna otra acción
  }
  }

   
    return (
        
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                {imagenes.map((url, index) => (
                    <Grid
                        item
                        xs={12} // Una columna en pantallas extra pequeñas
                        sm={6} // Dos columnas en pantallas pequeñas
                        md={4} // Tres columnas en pantallas medianas
                        lg={3} // Cuatro columnas en pantallas grandes
                        xl={2} // Seis columnas en pantallas extra grandes
                        key={index}
                    >
                        <Card className="contenedorgridcard">
                            <CardMedia
                                component="img"
                                height="450"
                                image={url}
                                alt={`Imagen ${index + 1}`}
                                onClick={() => handlePelicula(url)}
            
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default GridImages;
