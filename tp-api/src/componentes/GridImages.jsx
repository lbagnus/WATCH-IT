import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

function GridImages({ imagenes,titulo }) {
   
    return (
        
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            {titulo}
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
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={url}
                                alt={`Imagen ${index + 1}`}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default GridImages;
