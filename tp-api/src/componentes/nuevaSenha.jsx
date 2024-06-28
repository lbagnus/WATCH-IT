import React, { useState } from "react";
import { TextField, Button, Box, Container, Typography } from "@mui/material";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function NuevaSenha() {
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state?.email;
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(email)
        if (newPassword === confirmPassword) {
            try {
                const response = await axios.post('http://localhost:3000/reset-password', {
                    email,
                    password: newPassword
                });

                if (response.status === 200) {
                    setMensaje('La contraseña ha sido cambiada con éxito.');
                    navigate('/login');
                } else {
                    setMensaje('Error al cambiar la contraseña.');
                }
            } catch (error) {
                console.error('Error:', error);
                setMensaje('Error al cambiar la contraseña.');
            }
        } else {
            setMensaje('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                id='box'
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >   <img className='logoLogIn' src={"/imagenes/logos/logo negro2.png"} alt="Logo" />
                <Typography color={'black !important'} id='titulo2' component="h1" variant="h5" sx={{ marginBottom: 2 }}>
                    Ingresar Nueva Contraseña
                </Typography>

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

                    <Button
                        id='BotonLogIn'
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


