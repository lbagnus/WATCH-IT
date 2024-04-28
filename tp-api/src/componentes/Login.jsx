import React, { useState } from 'react';
import Loginpic from "../imagenes/logos/logo negro2.png";
import Button from '@mui/material/Button';
//import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { withTheme } from '@emotion/react';

const defaultTheme = createTheme();

function Login({onLogin}) {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        // Obtener los datos de inicio de sesión ingresados por el usuario
        const email = data.get('email');
        const password = data.get('password');
        
        // Recuperar los datos guardados en local storage
        const savedData = localStorage.getItem('userData');
        const parsedData = savedData ? JSON.parse(savedData) : null;

        // Verificar si las credenciales coinciden
        if (parsedData && email === parsedData.email && password === parsedData.password) {
            onLogin(); // Llama a la función onLogin para notificar a App.jsx
            navigate('/inicio');
           
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
        <ThemeProvider theme={defaultTheme}>
            <Container id='contenedor'  component="main" maxWidth="sm">
                
               
                <Box  id='box'

                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 0,
                      
                       
                    }}
                >
                     <img className='logoLogIn' src={Loginpic} alt="Avatar" />
                    <Typography component="h1" variant="h5" color={'black'} id='titulo'>
                    Login
                    </Typography>
                   

                    {errorMessage && (
                        <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                            {errorMessage}
                        </Typography>
                    )}

                    <Box  component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField 
                           
                            margin="normal"
                            required
                            fullWidth
                            id='emailboton'
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            id='BotonLogIn'
                            sx={{ mt: 3, mb: 2}}
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
        </ThemeProvider>
    );
}

export default Login;
