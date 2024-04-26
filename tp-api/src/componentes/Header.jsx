import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import BotonPerfil from "./BotonPerfil"

const Header = ({isLoggedIn, handleLogout}) => {
 
  
  return (
    <div>
      <nav className="contenedormenu">
        <div className="logo">
          <img
            className="logo-header"
            src={require("../imagenes/logos/logo negro2.png")}
            alt="logo-header"
          />
        </div>

        <ul className="nav">
          <li>
            <Link to="/inicio">Inicio</Link>
          </li>
          <li>
            <Link to="/MisListas">Vistas</Link>
          </li>
          <li>
            <Link to="/MisListas">Por ver</Link>
          </li>
          <li>
            <Link to="/MisListas">Preferidas</Link>
          </li>
                  </ul>

        <div class="buscador">
          <input className="buscado" type="text" />
          
          <div>
          {isLoggedIn ? (
                <div>
                    <img
                    className="icono-persona"
                    src={require("../imagenes/iconitos/icono-persona.png")}
                    alt="icono-persona"/>

          <h4>Julieta</h4>
                    <BotonPerfil handleLogout={handleLogout} />
                </div>
            ) : (
                // Muestra botón de Login si no está logueado
                <Link to="/Login">
                    <button>Login</button>
                </Link>
            )}
      
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Header;
