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
import axios from 'axios';

const GridImages = ({ imagenes, peliObjeto, mostrarBotonAgregar = true, onEliminarPelicula }) => {
  const navigate = useNavigate();
  const urlBase = "https://image.tmdb.org/t/p/w500/";

  // Estado para controlar el menú desplegable y la autenticación
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('usuarioId')); // Verifica si el usuario está logueado

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    setIsLoggedIn(true); // Actualiza el estado a logueado
  };

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
  const handleMenuItemClick = async (accion) => {
    if (!isLoggedIn) {
      alert('Debes estar logueado para agregar películas.');
      return;
    }

    switch (accion) {
      case "Preferidas":
        console.log(`Agregar "${selectedImage}" a Preferidas`);
        await agregarPelicula(selectedImage, 'Preferidas');
        break;
      case "Por Ver":
        console.log(`Agregar "${selectedImage}" a Por Ver`);
        await agregarPelicula(selectedImage, 'PorVer');
        break;
      case "Vistas":
        console.log(`Agregar "${selectedImage}" a Vistas`);
        await agregarPelicula(selectedImage, 'Vistas');
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
    console.log(isLoggedIn)
    // Verificar si el usuario está autenticado
    if (!isLoggedIn) {
      
      alert('Debes estar logueado para agregar películas.');
      return;
    }

    // Si está logueado, abrir el menú desplegable
    handleClick(event, url);
  };

  // Función para manejar el clic en el botón "-" encima de la imagen
  const handleDeleteButtonClick = (event, peliculaId) => {
    event.stopPropagation(); // Detener la propagación del evento click para evitar que se abra la imagen
    onEliminarPelicula(peliculaId);
  };

  // Función para agregar película con estado específico
  const agregarPelicula = async (imagen, estado) => {
    const id_usuario = localStorage.getItem('usuarioId');
    const poster_path = imagen;

    try {
      const response = await axios.post('http://localhost:3000/peliculas', { id_usuario, poster_path, estado });
      console.log('Respuesta del servidor al agregar película:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Error de respuesta:', error.response.data);
        alert("La película ya fue agregada");
      } else if (error.request) {
        console.error('No se recibió respuesta del servidor:', error.request);
      } else {
        console.error('Error al configurar la solicitud:', error.message);
      }
    }
  };

  return (
    <div>
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
                  {mostrarBotonAgregar ? (
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
                  ) : (
                    <IconButton
                      aria-label="Eliminar de lista"
                      style={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        backgroundColor: "#f44336", // Fondo rojo
                        color: "#ffffff", // Color blanco para el icono
                      }}
                      onClick={(event) => handleDeleteButtonClick(event, peliObjeto[index].id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
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
