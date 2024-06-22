import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

function Login({ onLogin }) {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        // Obtener los datos de inicio de sesión ingresados por el usuario
        const email = data.get('email');
        const password = data.get('password');
      console.log(email)
        // Enviar los datos al backend para autenticación
        try {
            const response = await axios.post('http://localhost:3000/Login', { email, password});
            const userData = response.data.user;
            const id = userData.id
            localStorage.setItem('usuarioId', id);
            onLogin(userData); // Llama a la función onLogin para notificar a App.jsx
            navigate('/inicio');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setErrorMessage('Usuario y/o contraseña incorrectos');
        }
    };

    const manejarClickRegistro = () => {
        navigate('/Registro');
    };

    const manejarClickOlvido = () => {
        navigate('/Olvido');
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container id='contenedor' component="main" maxWidth="sm">
                <Box id='box'
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: 0,
                    }}
                >
                    <img className='logoLogIn' src={"/imagenes/logos/logo negro2.png"} alt="Avatar" />
                    <Typography component="h1" variant="h5" color={'black'} id='titulo'>
                        Login
                    </Typography>

                    {errorMessage && (
                        <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                            {errorMessage}
                        </Typography>
                    )}

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                            <Link className="forgot" href="#" variant="body2" onClick={manejarClickOlvido}>
                                {"Forgot password?"}
                            </Link>
                            </Grid>
                            <Grid item>
                            <Link href = "" className="forgot" variant="body2" onClick={manejarClickRegistro}>
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
