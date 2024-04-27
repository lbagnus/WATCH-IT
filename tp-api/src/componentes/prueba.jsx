
 /* if logeado
          <img
            className="icono-persona"
            src={require("../imagenes/iconitos/icono-persona.png")}
            alt="icono-persona"
          />

          <h4>Julieta</h4>
          <BotonPerfil id='botonperfilestilo'/>*/

          /*<Route path="/MisListas" element={<MisListas />} />*/


          import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Inicio from "./componentes/Inicio";
import Login from "./componentes/Login";
import Pelicula from "./componentes/Pelicula";

import "./css/header.css";
import "./css/footer.css";
import "./css/inicio.css";
import "./css/carrusel.css";
import "./css/pelicula.css";
import "../src/css/Login.css";

function App() {
  return (
    
    <Router>
      <div>
        <Header />
        {/* Aquí debes añadir esta línea para renderizar el componente Header */}
        <Routes>
         <Route path="/Login" element={<Login />} />,
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/preferidas" element={<Pelicula />} />
          {/* Añade aquí más rutas si las tienes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),


    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = (event) => {
      event.preventDefault(); // Evitar el comportamiento por defecto del formulario
      const data = new FormData(event.currentTarget); // Obtener los datos del formulario
      const email = data.get("email");
      const password = data.get("password");



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

const manejarClickRegistro = () => {
    // Navegar a la ruta deseada
    navigate('/Registro');
  };
  const manejarClickOlvido = () => {
    // Navegar a la ruta deseada
    navigate('/Olvido');
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
                            <Link class="forgot" href="#" variant="body2" onClick={manejarClickOlvido}>
                                {"Forgot password?"}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href = "" class="forgot" variant="body2" onClick={manejarClickRegistro}>
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
