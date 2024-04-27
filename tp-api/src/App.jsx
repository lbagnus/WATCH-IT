import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate, Navigate} from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Inicio from './componentes/Inicio';
import Login from './componentes/Login';
import Pelicula from './componentes/Pelicula';
import MisListas from './componentes/MisListas';
import Registro from './componentes/Registro';
import OlvidoSenha from './componentes/OlvidoSenha';


import './App.css';
import './css/header.css';
import './css/footer.css';
import './css/inicio.css';
import './css/carrusel.css';
import './css/pelicula.css';
import './css/Login.css';



function App() {


  // Obtiene la ubicación actual
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Función para manejar el inicio de sesión
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

     // Función para manejar el cierre de sesión
     const handleLogout = () => {
      setIsLoggedIn(false);
      navigate('/inicio');
  };
    

    // Determina si la ruta actual es la página de Login
    const isLoginPage = location.pathname === '/Login' || location.pathname=== "/Registro"|| location.pathname=== "/Olvido";
    console.log(location.pathname )
   
    

    return (
        <div>
            {/* Muestra Header solo si no está en la página de Login */}
            {!isLoginPage && <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />}
            

            {/* Configura las rutas */}
            <Routes>
                <Route path="/" element={<Navigate to="/inicio" />} />
                {/* Ruta para Inicio */}
                <Route path="/inicio" element={<Inicio />} />
                
                {/* Ruta para Login */}
                <Route path="/Login" element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Inicio />} />
                <Route path="/Registro" element={<Registro/>} />
                <Route path="/Olvido" element={<OlvidoSenha/>} />
                
                {/* Ruta para Pelicula */}
                <Route path="/Pelicula" element={isLoggedIn ? <Pelicula /> : <Login onLogin={handleLogin} />} />
                <Route path="/MisListas" element={<MisListas />} />
            </Routes>
            
            {/* Muestra Footer solo si no está en la página de Login */}
            {!isLoginPage && <Footer />}
        </div>
        
    );
}

export default App;

   
