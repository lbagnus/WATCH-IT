import React, { useState } from "react";
import { TextField, Button, Box, Container, Typography } from "@mui/material";

function CodigoRecupero({ verificarToken }) {
    const [token, setToken] = useState('');
    const [mensaje, setMensaje] = useState('');

    // Maneja el cambio de entrada del token
    const handleTokenChange = (event) => {
        setToken(event.target.value);
    };

    // Maneja el envío del token
    const handleSubmit = (event) => {
        event.preventDefault();
        // Llama a la función `verificarToken` pasando el token
        const esValido = verificarToken(token);
        
        // Establece el mensaje basado en si el token es válido o no
        if (esValido) {
            setMensaje('El token es válido. Ahora puedes proceder con la recuperación de la contraseña.');
        } else {
            setMensaje('El token es inválido. Inténtalo de nuevo.');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5" sx={{ marginBottom: 2 }}>
                    Ingresar Código de Recupero
                </Typography>

                {/* Mensaje que indica si el token es válido o no */}
                {mensaje && (
                    <Typography variant="body2" >
                        {mensaje}
                    </Typography>
                )}

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    {/* Campo de entrada para el token */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Código de recuperación"
                        name="token"
                        value={token}
                        onChange={handleTokenChange}
                        autoComplete="token"
                        autoFocus
                        id="token"
                    />

                    {/* Botón para enviar el token */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Verificar Código
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default CodigoRecupero