import React, { useState } from "react";
import { TextField, Button, Box, Container, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function NuevaSenha() {
    const navigate = useNavigate();
    // Estado para almacenar la nueva contraseña
    const [newPassword, setNewPassword] = useState('');
    // Estado para almacenar la confirmación de la nueva contraseña
    const [confirmPassword, setConfirmPassword] = useState('');
    // Estado para almacenar mensajes para el usuario
    const [mensaje, setMensaje] = useState('');

    // Maneja el cambio en el campo de la nueva contraseña
    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    // Maneja el cambio en el campo de confirmación de la nueva contraseña
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    // Maneja el envío del formulario para cambiar la contraseña
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Verifica si la nueva contraseña y su confirmación coinciden
        if (newPassword === confirmPassword) {
            // Si coinciden, procesa el cambio de contraseña
            // Aquí debes agregar el código para manejar el cambio de contraseña, por ejemplo, hacer una solicitud a un servidor
            console.log("Contraseña cambiada con éxito");
            setMensaje('La contraseña ha sido cambiada con éxito.');
            const userData = localStorage.getItem('userData');
            if (userData) {
                const data = JSON.parse(userData);
                data.password = newPassword;
                const updatedUserData = JSON.stringify(data);
                localStorage.setItem('userData', updatedUserData);
            }
            navigate('/login')
        } else {
            // Si no coinciden, muestra un mensaje de error
            setMensaje('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
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
                    Ingresar Nueva Contraseña
                </Typography>

                {/* Mensaje para el usuario */}
                {mensaje && (
                    <Typography variant="body2" color="error">
                        {mensaje}
                    </Typography>
                )}

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    {/* Campo de entrada para la nueva contraseña */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        label="Nueva contraseña"
                        name="newPassword"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        autoComplete="new-password"
                        id="newPassword"
                    />

                    {/* Campo de entrada para confirmar la nueva contraseña */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        label="Confirmar nueva contraseña"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        autoComplete="confirm-password"
                        id="confirmPassword"
                    />

                    {/* Botón para enviar la nueva contraseña */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Cambiar Contraseña
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default NuevaSenha;
