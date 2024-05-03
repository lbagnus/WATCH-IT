import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BotonPerfil from "./BotonPerfil";
import Buscador from "./Buscador";
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from 'react';



const Header = ({ isLoggedIn, handleLogout}) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Recuperar los datos de local storage
    const savedData = localStorage.getItem('userData');
        
    // Verificar si hay datos en local storage
    if (savedData) {
        // Convertir el JSON a objeto JavaScript
        const parsedData = JSON.parse(savedData);
        
        // Actualizar el estado con los datos recuperados
        setUserData(parsedData);
    }
}, []); // El efecto se ejecuta una sola vez cuando el componente se monta

  
  // Crea una referencia para el elemento de entrada
  const inputRef = useRef(null);
 

  // Define la función que se ejecutará cuando se presione "Enter"
  function onEnterPress(event) {
    if (event.key === 'Enter') {
      const inputValue = inputRef.current.value;
      navigate("/Buscador", { state: { input: inputValue } });
      
    
      
      event.preventDefault();

      // Aquí puedes realizar las acciones deseadas al presionar Enter
      // Por ejemplo, usar el valor del inputRef.current.value para buscar algo
      // y luego, llamar a una función para manejar la búsqueda
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

  return (
    <div>
      <nav className="contenedormenu">
        <div className="logo">
          <img
            className="logo-header"
            src={require("../imagenes/logos/logo blanco3.png")}
            alt="logo-header"
          />

          <ul className="nav">
            <li>
              <Link to="/inicio">Inicio</Link>
            </li>
            <li>
              <Link to="/MisListas">Vistas</Link>
            </li>
            <li>
              <Link to="/PorVer">Por ver</Link>
            </li>
            <li>
              <Link to="/MisListas">Preferidas</Link>
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
              <h4>ver esto</h4>
                <BotonPerfil handleLogout={handleLogout} />
              </div>
            ) : (
              <Link to="/Login">
                <button className="botonLogin">Login</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
