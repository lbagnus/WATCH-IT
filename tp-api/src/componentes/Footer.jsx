import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CondicionesUso from "./CondicionesDeUso";
import Contactenos from "./Contactenos";

const Footer = () => {
  return (
    <div className="contenedorfooter">
      <img
        className="logo-footer"
        src={require("../imagenes/logos/logo blanco3.png")}
        alt="logo-header"
      />
        <div className="lineaFooter"></div>

      <div clasName="datos">
        <ul className="nav">
          <li>
            <Link to="/Contactenos">Contactenos</Link>
          </li>
          <li>
            <Link to="/CondicionesDeUso">Condiciones de uso</Link>
          </li>
          <li>
            <a href="https://www.google.com/search?hl=es&q=que+es+una+politica+de+privacidad&lr=">Politica de privacidad</a>
          </li>
          <li>
              <Link to="/Pelicula">SuburbanCo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
