import React from 'react';
import { Container, Box, Typography, Grid, TextField, Button, Link, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const defaultTheme = createTheme();

function Registro() {
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        // Obtener los datos del formulario
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const email = data.get('email');
        const password = data.get('password');
        
        // Enviar los datos al backend
        try {
            const response = await axios.post('http://localhost:3000/users', {
                firstName,
                lastName,
                email,
                password,
            });
            
            console.log('Usuario creado:', response.data);
            
            // Redirige a la página de inicio de sesión después de registrarse
            navigate('/Inicio');
        } catch (error) {
            if (error.response) {
                // El servidor respondió con un código de error (ej. 4xx, 5xx)
                console.error('Error de respuesta:', error.response.data);
            } else if (error.request) {
                // La solicitud fue realizada pero no se recibió respuesta
                console.error('No se recibió respuesta del servidor:', error.request);
            } else {
                // Ocurrió un error durante la configuración de la solicitud
                console.error('Error al configurar la solicitud:', error.message);
            }
            
            // Mostrar un mensaje de error al usuario
            alert('Error al intentar registrar el usuario. Por favor, intenta nuevamente más tarde.');
        }
    };
    
    const handleSignIn = () => {
        navigate('/Login');
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="sm">
                <Box id='box'
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img className='logoLogIn' src={"/imagenes/logos/logo negro2.png"} alt="Avatar" />
                    <Typography component="h1" variant="h5" color={'black'} id='titulo'>
                        Sign Up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            id='BotonLogIn'
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link class="forgot" href="#" variant="body2" onClick={handleSignIn}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Registro;
