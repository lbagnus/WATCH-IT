import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BotonPerfil from "./BotonPerfil"

const Header = () => {
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
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/preferidas">Vistas</Link>
          </li>
          <li>
            <Link to="/about">Por ver</Link>
          </li>
          <li>
            <Link to="/about">Preferidas</Link>
          </li>
                  
        </ul>

        <div class="buscador">
          <input className="buscado" type="text" />

          <img
            className="icono-persona"
            src={require("../imagenes/iconitos/icono-persona.png")}
            alt="icono-persona"
          />

          <h4>Julieta</h4>

          <BotonPerfil id='botonperfilestilo'/>
        </div>
      </nav>
    </div>
  );
};

export default Header;
