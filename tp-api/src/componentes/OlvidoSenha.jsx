import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
function generateToken() {
    return Math.random().toString(36).substring(2, 15);
}

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
        handleEnviar(); // Mover la llamada aquí para evitar manejar el evento dos veces
    };


    const handleEnviar = async () => {
        try {
            const response = await axios.post(`http://localhost:3000/email/${email}`);

            if (response.status === 200) {
                const data = response.data;
                if (data.exists) {
                    const recoveryToken = generateToken();
                    alert(`Token de recuperación: ${recoveryToken}`);
                    navigate('/CodigoRecupero', { state: { tokenReal: recoveryToken, email: email } });
                } else {
                    setMessage('El correo electrónico ingresado no está registrado.');
                }
            } else {
                setMessage('Error al verificar el correo electrónico.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error al verificar el correo electrónico.');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box id='box'
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <img className='logoLogIn' src={"/imagenes/logos/logo negro2.png"} alt="Logo" />
                <Typography component="h1" variant="h5" color={'black'} id='titulo2'>
                    Olvidé mi contraseña
                </Typography>

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
                                ¿Ya tienes cuenta? Inicia sesión
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <ToastContainer />
        </Container>
    );
}

export default ForgotPassword;



