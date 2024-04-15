import React from "react";

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
            <a href="default.asp">Contactanos</a>
          </li>
          <li>
            <a href="news.asp">Condiciones de uso</a>
          </li>
          <li>
            <a href="contact.asp">Politicas de privacidad</a>
          </li>
          <li>
            <a href="about.asp">SubUrbaNCo</a> //no es href CAMBIAR
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
