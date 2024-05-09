import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from 'react-router-dom';
import BotonFiltro from './BotonFiltro';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function GridImages({imagenes ,  peliObjeto, genero}) {
  console.log("Propiedades recibidas:");
  console.log("imagenes:", imagenes);
  console.log("peliObjeto:", peliObjeto);

  const navigate = useNavigate();
  const urlBase = "https://image.tmdb.org/t/p/w500/"

  const handlePelicula = (imagenPeli) => {
    console.log("Contenido de peliObjeto:", peliObjeto);

    const peliculaCorrespondiente = peliObjeto.find((pelicula) => {
      const urlCompleta = `${urlBase}${pelicula.poster_path}`;
      return urlCompleta === imagenPeli;
    });

    if (peliculaCorrespondiente) {
      navigate("/Pelicula", { state: { objeto: peliculaCorrespondiente } });
    } else {
      const ActorCorrespondiente = peliObjeto.find((Actor) => {
        const urlCompleta = `${urlBase}${Actor.profile_path}`;
        return urlCompleta === imagenPeli;
      });
      if (ActorCorrespondiente.known_for_department === "Acting") {
        navigate("/Actor", { state: { objeto: ActorCorrespondiente } });
      } else if (ActorCorrespondiente.known_for_department === "Directing") {
        navigate("/Director", { state: { objeto: ActorCorrespondiente } });
      }else{
        console.log(
          "No se encontró información que coincida con la imagen proporcionada.",
          imagenPeli,
          "aca empieza el obejeto"
        );
        return null; // Si no se encuentra, retorna nulo o realiza alguna otra acción}
      } 
    }
  };
  const handleIdiomaClick = (idioma, genero, peliculas) => {
    // Navegar a la ruta de BotonFiltro con los parámetros
    navigate(`/BotonFiltro?idioma=${idioma}&genero=${genero}&peliculas=${encodeURIComponent(JSON.stringify(peliObjeto))}`);

    //<BotonFiltro idioma = {idioma} genero={genero} peliculas={peliculas}/>
    
  };
   
    return (
      <div>
          <div>
          <FormControl id="filtroboton" sx={{ m: 1, minWidth: 120, }}>
            <InputLabel id="grouped-select" htmlFor="grouped-select" sx={{ outlinecolor: 'white', backgroundcolor: 'white'}}>Idioma</InputLabel> {/*el estilo va a estar en listas.css*/}
            <Select defaultValue=""  label="Grouping">
              <MenuItem value=""></MenuItem>
              <MenuItem onClick={() => handleIdiomaClick("None", genero,  peliObjeto)} value={1}>None</MenuItem>
              <MenuItem onClick={() => handleIdiomaClick("Ingles", genero,  peliObjeto)} value={1}>Ingles</MenuItem>
              <MenuItem onClick={() => handleIdiomaClick("Español", genero,  peliObjeto)} value={1}>Español</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="grouped-select" htmlFor="grouped-select" sx={{ color: 'white' }}>Antigûedad</InputLabel>
            <Select defaultValue=""  label="Grouping">
              <MenuItem value=""></MenuItem>
              <MenuItem onClick={() => handleIdiomaClick("None", genero,  peliObjeto)} value={1}>None</MenuItem>
              <MenuItem onClick={() => handleIdiomaClick("Antigua", genero,  peliObjeto)} value={1}>Antigûa</MenuItem>
              <MenuItem onClick={() => handleIdiomaClick("Reciente", genero,  peliObjeto)} value={1}>Reciente</MenuItem>
            </Select>
          </FormControl>
        </div>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
                <Grid container spacing={2}>
                    {imagenes && imagenes.map((url, index) => (
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
        </div>
    );
}

export default GridImages;
