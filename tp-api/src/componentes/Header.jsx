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
            <Link to="/MisListas">Por ver</Link>
          </li>
          <li>
            <Link to="/MisListas">Preferidas</Link>
          </li>
          </ul>
        </div>

        <div class="buscador">
          <input className="buscado" type="text" />
          
          <div>
          {isLoggedIn ? (
                <div className="perfil">
                    <h4>Julieta</h4>
                    <BotonPerfil handleLogout={handleLogout} />
                </div>
            ) : (
                // Muestra botón de Login si no está logueado
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
