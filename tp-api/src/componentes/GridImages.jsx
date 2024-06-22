import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";
import PorVer from './PorVer';
import { useNavigate } from "react-router-dom";

const GridImages = ({ imagenes, peliObjeto, genero }) => {
  const navigate = useNavigate();
  const urlBase = "https://image.tmdb.org/t/p/w500/";

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
        navigate('/Preferidas', { state: { selectedImage, lista: 'Preferidas' } });
        break;
      case "Por Ver":
        console.log(`Agregar "${selectedImage}" a Por Ver`);
        navigate('/PorVer', { state: { imagen: selectedImage }});
        break;
      case "Vistas":
        console.log(`Agregar "${selectedImage}" a Vistas`);
        navigate('/Vistas', { state: { selectedImage, lista: 'Vistas' } });
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
