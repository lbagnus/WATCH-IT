import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import BotonPerfil from "./BotonPerfil";
import Drawer from "./Drawer";
import { useMediaQuery } from '@mui/material';

const Header = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [nombre, setNombre] = useState(null);

  const handleName = () => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      const data = JSON.parse(savedData);
      return data.firstName; // Retorna el nombre
    }
    return null; // Si no hay datos, retorna null
  };

  useEffect(() => {
    const nombre = handleName();
    setNombre(nombre);
  }, []); // El efecto se ejecuta una sola vez cuando el componente se monta

  // Crea una referencia para el elemento de entrada
  const inputRef = useRef(null);

  // Define la función que se ejecutará cuando se presione "Enter"
  function onEnterPress(event) {
    if (event.key === 'Enter') {
      const inputValue = inputRef.current.value;
      navigate("/Buscador", { state: { input: inputValue } });

      event.preventDefault();
    }
  }

  // Usa useEffect para agregar el event listener al input cuando el componente se monta
  useEffect(() => {
    const inputElement = inputRef.current;

    // Verifica si inputElement es válido
    if (inputElement) {
      // Agrega el event listener para el evento "keydown"
      inputElement.addEventListener('keydown', onEnterPress);
    }

    // Esta función de limpieza se ejecutará cuando el componente se desmonte
    return () => {
      if (inputElement) {
        // Elimina el event listener para evitar fugas de memoria
        inputElement.removeEventListener('keydown', onEnterPress);
      }
    };
  });

  const isMobile = useMediaQuery('(max-width:880px)'); // Verificar si es un dispositivo móvil

  return (
    <div className="contenedor-header">
      {isMobile && <div className="contenedorheaderresponsive">
        <Drawer />
        
        <input
            id="buscado-responsive"
            ref={inputRef}
            className="buscado2"
            type="text"
            placeholder="Busca aquí..."
        />
        <div>
            {isLoggedIn ? (
              <div className="perfil-responsive">
                <h4>{nombre}</h4>
                <BotonPerfil handleLogout={handleLogout} />
              </div>
            ) : (
              <Link to="/Login">
                <button className="botonLogin-responsive">Login</button>
              </Link>
            )}
          </div>
        </div>
      } {/* Mostrar el Drawer solo en dispositivos móviles */}
      {!isMobile && <nav className="contenedormenu">
        <div className="logo">

        <Link to="/inicio">

          <img
            className="logo-header"
            src={'/imagenes/logos/logo blanco3.png'}
            alt="logo-header"
          />
             </Link>
          <ul className="nav">
            <li>
              <Link to="/inicio">Inicio</Link>
            </li>
            <li>
              <Link to="/Vistas">Vistas</Link>
            </li>
            <li>
              <Link to="/PorVer" >Por ver</Link>
            </li>
            <li>
              <Link to="/Preferidas">Preferidas</Link>
            </li>
          </ul>
        </div>

        <div className="buscador">
          <input
            id="buscado"
            ref={inputRef}
            className="buscado2"
            type="text"
            placeholder="Busca aquí..."
          />

          <div>
            {isLoggedIn ? (
              <div className="perfil">
                <h4>{nombre}</h4>
                <BotonPerfil handleLogout={handleLogout} />
              </div>
            ) : (
              <Link to="/Login">
                <button className="botonLogin">Login</button>
              </Link>
            )}
          </div>
        </div>
      </nav>}
    </div>
  );
};

export default Header;
