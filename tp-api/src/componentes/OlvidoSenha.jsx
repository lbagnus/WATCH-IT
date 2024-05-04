import * as React from "react";
import { useState } from "react";
import Avatar from "../imagenes/logos/logo negro2.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from 'react-router-dom';
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
    };
    const handleEnviar = ()=>{
       
        const savedData = localStorage.getItem('userData');
       if(savedData){
            // Convierte la cadena JSON a un objeto JavaScript
            const Data = JSON.parse(savedData);
        
            // Accede a la propiedad `email` del objeto JavaScript `userData`
            const emailU = Data.email;

        
        if (emailU == email) {
            // Genera un token de recuperación
            const recoveryToken = generateToken();

            // Asocia el token con el usuario en la base de datos
            Data.recoveryToken = recoveryToken;
            
            // Guarda `Data` actualizado en `localStorage`
            localStorage.setItem('userData', JSON.stringify(Data));
           
            toast.success(`Token de recuperación: ${recoveryToken}`, {
            position: "top-left" });
            navigate('/CodigoRecupero', { state: { tokenReal: recoveryToken } })
           
           

        console.log(`Correo electrónico enviado a ${email} con instrucciones para restablecer la contraseña.`);
       console.log(`Enlace de recuperación: https://example.com/reset?token=${recoveryToken}`);

        // Muestra un mensaje de confirmación al usuario
    }} else {
        // Si el correo no está en la base de datos
        setMessage('El correo electrónico ingresado no está registrado.');
    }
        // Aquí puedes agregar la lógica para enviar la solicitud de restablecimiento de contraseña
        // Por ejemplo, puedes enviar un correo electrónico al servidor para restablecer la contraseña
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
                <img className='logoLogIn' src={Avatar} alt="Logo" />
                <Typography component="h1" variant="h5" color={'black'} id='titulo2'>
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
                        onClick={handleEnviar}
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
