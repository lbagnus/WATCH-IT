import React, { useState } from "react";
import { TextField, Button, Box, Container, Typography } from "@mui/material";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function CodigoRecupero() {
    const navigate = useNavigate();
    const location = useLocation();
    const tokenReal = location.state?.tokenReal;
    const email = location.state
    const [token, setToken] = useState('');
    const [mensaje, setMensaje] = useState('');

    // Maneja el cambio de entrada del token
    const handleTokenChange = (event) => {
        setToken(event.target.value);
    };

    const verificarToken = (token) => {
        console.log(tokenReal)
        // Verifica si los datos del usuario están cargados
       if (tokenReal === token) {
            // Compara el token ingresado con el token de recuperación guardado
            return tokenReal === token;
      }
        // Si no hay datos de usuario o recoveryToken, el token no es válido
          return false;
    };
    // Maneja el envío del token
    const handleSubmit = (event) => {
        event.preventDefault();
        // Llama a la función `verificarToken` pasando el token
        const esValido = verificarToken(token);
        
        // Establece el mensaje basado en si el token es válido o no
        if (esValido) {
            navigate('/NuevaSenha',{ state: { email: email } })

        } else {
            setMensaje('El token es inválido. Inténtalo de nuevo.');
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
                <Typography component="h1" variant="h5" color={'black !important'} id='titulo2'>
                    Ingresar Código Recupero
                </Typography>

                {/* Mensaje que indica si el token es válido o no */}
                {mensaje && (
                    <Typography variant="body2" >
                        {mensaje}
                    </Typography>
                )}

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    {/* Campo de entrada para el token */}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Código de recuperación"
                        name="token"
                        value={token}
                        onChange={handleTokenChange}
                        autoComplete="token"
                        autoFocus
                        id="token"
                    />

                    {/* Botón para enviar el token */}
                    <Button
                        id='BotonLogIn'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Verificar Código
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default CodigoRecupero