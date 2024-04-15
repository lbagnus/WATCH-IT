import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
            <Link to="/preferidas">Preferidas</Link>
          </li>
          <li>
            <Link to="/about">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Inicio</Link>
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

          <img
            className="icono-arrow"
            src={require("../imagenes/iconitos/arrow.png")}
            alt="icono-arrow"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
