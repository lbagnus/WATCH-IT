import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, Select} from '@mui/material';
import axios from "axios";

const agregarPeliculaPorVer = async (imagen) => {
  const id_usuario = localStorage.getItem("usuarioId");
  const poster_path = imagen;
  const estado = "PorVer";

  try {
    const response = await axios.post("http://localhost:3000/peliculas", {
      id_usuario,
      poster_path,
      estado,
    });
    console.log("Respuesta del servidor al agregar película:", response.data);
  } catch (error) {
    if (error.response) {
      console.error("Error de respuesta:", error.response.data);
      alert("La película ya fue agregada");
    } else if (error.request) {
      console.error("No se recibió respuesta del servidor:", error.request);
    } else {
      console.error("Error al configurar la solicitud:", error.message);
    }
  }
};

const agregarPeliculaVistas = async (imagen) => {
  const id_usuario = localStorage.getItem("usuarioId");
  const poster_path = imagen;
  const estado = "Vistas";

  try {
    const response = await axios.post("http://localhost:3000/peliculas", {
      id_usuario,
      poster_path,
      estado,
    });
    console.log("Respuesta del servidor al agregar película:", response.data);
  } catch (error) {
    if (error.response) {
      console.error("Error de respuesta:", error.response.data);
      alert("La película ya fue agregada");
    } else if (error.request) {
      console.error("No se recibió respuesta del servidor:", error.request);
    } else {
      console.error("Error al configurar la solicitud:", error.message);
    }
  }
};

const agregarPeliculaPreferidas = async (imagen) => {
  const id_usuario = localStorage.getItem("usuarioId");
  const poster_path = imagen;
  const estado = "Preferidas";

  try {
    const response = await axios.post("http://localhost:3000/peliculas", {
      id_usuario,
      poster_path,
      estado,
    });
    console.log("Respuesta del servidor al agregar película:", response.data);
  } catch (error) {
    if (error.response) {
      console.error("Error de respuesta:", error.response.data);
      alert("La película ya fue agregada");
    } else if (error.request) {
      console.error("No se recibió respuesta del servidor:", error.request);
    } else {
      console.error("Error al configurar la solicitud:", error.message);
    }
  }
};

const GridImages = ({
  imagenes,
  peliObjeto,
  mostrarBotonAgregar = true,
  onEliminarPelicula,
  genero
}) => {
  const navigate = useNavigate();
  const urlBase = "https://image.tmdb.org/t/p/w500/";
  const savedLoginState = localStorage.getItem("isLoggedIn");
  console.log("log",savedLoginState);
  // Estado para controlar el menú desplegable
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Función para manejar el clic en una imagen
  const handlePelicula = (imagenPeli) => {
    const peliculaCorrespondiente = peliObjeto.find((pelicula) => {
      const urlCompleta = `${urlBase}${pelicula.poster_path}`;
      return urlCompleta === imagenPeli;
    });

    if (peliculaCorrespondiente) {
      navigate("/Pelicula", { state: { objeto: peliculaCorrespondiente } });
    } else {
      console.log(
        "No se encontró información que coincida con la imagen proporcionada:",
        imagenPeli
      );
    }
  };

  // Función para abrir el menú desplegable y guardar la imagen seleccionada
  const handleClick = (event, url) => {
    setAnchorEl(event.currentTarget);
    setSelectedImage(url);
  };

  // Función para cerrar el menú desplegable
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedImage(null);
  };

  // Función para manejar la selección de opción en el menú desplegable
  const handleMenuItemClick = (accion) => {
    switch (accion) {
      case "Preferidas":
        console.log(`Agregar "${selectedImage}" a Preferidas`);
        agregarPeliculaPreferidas(selectedImage);
        break;
      case "Por Ver":
        console.log(`Agregar "${selectedImage}" a Por Ver`);
        agregarPeliculaPorVer(selectedImage);
        break;
      case "Vistas":
        console.log(`Agregar "${selectedImage}" a Vistas`);
        agregarPeliculaVistas(selectedImage);
        break;
      default:
        console.log(`Opción no reconocida: ${accion}`);
    }

    // Cerrar el menú desplegable después de seleccionar una opción
    handleClose();
  };

  // Función para manejar el clic en el botón "+" encima de la imagen
  const handleAddButtonClick = (event, url) => {
    event.stopPropagation(); // Detener la propagación del evento click para evitar que se abra la imagen
    handleClick(event, url);
  };

  // Función para manejar el clic en el botón "-" encima de la imagen
  const handleDeleteButtonClick = (event, peliculaId) => {
    event.stopPropagation(); // Detener la propagación del evento click para evitar que se abra la imagen
    onEliminarPelicula(peliculaId);
  };

  const handleIdiomaClick = (idioma, genero, peliculas) => {
    // Navegar a la ruta de BotonFiltro con los parámetros
    navigate(`/BotonFiltro?idioma=${idioma}&genero=${genero}&peliculas=${encodeURIComponent(JSON.stringify(peliObjeto))}`);
    //<BotonFiltro idioma = {idioma} genero={genero} peliculas={peliculas}/>
    
  };

  return (
    <div>

{mostrarBotonAgregar && (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <FormControl id="filtroboton" sx={{ m: 1, minWidth: 130, border: 'solid 2px white !important' }}>
      <InputLabel id="grouped-select" htmlFor="grouped-select" >Idioma</InputLabel>
      <Select
        defaultValue=""
        label="Grouping"
        sx={{
          '& .MuiSelect-icon': {
            color: 'white',
          },
        }}
      >
        <MenuItem value=""></MenuItem>
        <MenuItem onClick={() => handleIdiomaClick("None", genero, peliObjeto)} value={1}>None</MenuItem>
        <MenuItem onClick={() => handleIdiomaClick("Ingles", genero, peliObjeto)} value={1}>Ingles</MenuItem>
        <MenuItem onClick={() => handleIdiomaClick("Español", genero, peliObjeto)} value={1}>Español</MenuItem>
      </Select>
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 130, border: 'solid 2px white !important' }}>
      <InputLabel id="grouped-select" htmlFor="grouped-select" sx={{ color: 'white' }}>Antiguedad</InputLabel>
      <Select
        defaultValue=""
        label="Grouping"
        sx={{
          '& .MuiSelect-icon': {
            color: 'white',
          },
        }}
      >
        <MenuItem value=""></MenuItem>
        <MenuItem onClick={() => handleIdiomaClick("None", genero, peliObjeto)} value={1}>None</MenuItem>
        <MenuItem onClick={() => handleIdiomaClick("Antigua", genero, peliObjeto)} value={1}>Antigûa</MenuItem>
        <MenuItem onClick={() => handleIdiomaClick("Reciente", genero, peliObjeto)} value={1}>Reciente</MenuItem>
      </Select>
    </FormControl>
  </div>
)}

      
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          {imagenes &&
            imagenes.map((url, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                key={index}
                style={{ position: "relative" }}
              >
                <Card className="contenedorgridcard">
                  <CardMedia
                    component="img"
                    height="450"
                    image={url}
                    alt={`Imagen ${index + 1}`}
                    onClick={() => handlePelicula(url)}
                  />
                  {savedLoginState && mostrarBotonAgregar ? (
                    <IconButton
                      aria-label="Agregar a lista"
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        backgroundColor: "#2196f3", // Fondo azul
                        color: "#ffffff", // Color blanco para el icono
                      }}
                      onClick={(event) => handleAddButtonClick(event, url)}
                    >
                      <AddIcon />
                    </IconButton>
                  ) :savedLoginState && !mostrarBotonAgregar ? (
                    <IconButton
                      aria-label="Eliminar de lista"
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        backgroundColor: "#f44336", // Fondo rojo
                        color: "#ffffff", // Color blanco para el icono
                      }}
                      onClick={(event) =>
                        handleDeleteButtonClick(event, peliObjeto[index].id)
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  ) : null}
                </Card>

                {/* Menú para seleccionar acción */}
                <Menu
                  id={`menu-${index}`}
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={() => handleMenuItemClick("Vistas")}>
                    Agregar a Vistas
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuItemClick("Por Ver")}>
                    Agregar a Por Ver
                  </MenuItem>
                  <MenuItem onClick={() => handleMenuItemClick("Preferidas")}>
                    Agregar a Preferidas
                  </MenuItem>
                </Menu>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
};

export default GridImages;
