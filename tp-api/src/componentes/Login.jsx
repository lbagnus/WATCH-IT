import * as React from "react";
import { useState } from "react";
import Avatar from "../imagenes/logos/logo negro2.png";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';


function Login({ onLogin }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario
    const data = new FormData(event.currentTarget); // Obtener los datos del formulario
    const email = data.get("email");
    const password = data.get("password");

    if (email === "lbagnus" && password === "12345678") {
        onLogin(); // Llama a la función onLogin para notificar a App.jsx
        navigate('/inicio'); // Redirige a la página de inicio
    } else {
        setErrorMessage('Usuario y/o contraseña incorrectos');
    }
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
                <img src={Avatar} alt="Avatar" />
                <Typography component="h1" variant="h5">
                    Login
                </Typography>

                {/* Muestra el mensaje de error si existe */}
                {errorMessage && (
                    <Typography
                        variant="body2"
                        color="error"
                        sx={{ marginTop: 2, marginBottom: 2 }}
                    >
                        {errorMessage}
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
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        id="emailboton"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <div className="lineaLogin"></div>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        id="botonSignIn"
                    >
                      Login 
                        
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link class="forgot" href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link class="forgot" href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;
