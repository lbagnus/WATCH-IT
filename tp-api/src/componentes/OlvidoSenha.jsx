import * as React from "react";
import { useState } from "react";
import Avatar from "../imagenes/logos/logo negro2.png";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleLogin = () => {
        navigate('/Login');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Aquí puedes agregar la lógica para enviar la solicitud de restablecimiento de contraseña
        // Por ejemplo, puedes enviar un correo electrónico al servidor para restablecer la contraseña

        // Mostrar un mensaje de confirmación
        setMessage('Si el correo electrónico está registrado, se enviarán instrucciones para restablecer la contraseña.');
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <img src={Avatar} alt="Logo" />
                <Typography component="h1" variant="h5">
                    Olvidé mi contraseña
                </Typography>

                {/* Muestra el mensaje de confirmación si existe */}
                {message && (
                    <Typography
                        variant="body2"
                        color="success"
                        sx={{ marginTop: 2, marginBottom: 2 }}
                    >
                        {message}
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
                        label="Correo electrónico"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        autoComplete="email"
                        autoFocus
                        id="email"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        id="BotonLogIn"
                    >
                        Enviar instrucciones
                    </Button>

                    <Grid container justifyContent="center">
                        <Grid item>
                            <Link className="forgot" variant="body2" onClick={handleLogin}>
                                {"¿Volver a iniciar sesión?"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default ForgotPassword;
