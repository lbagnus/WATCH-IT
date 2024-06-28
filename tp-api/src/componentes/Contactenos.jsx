import React from "react";

const Contactenos = () => {
  return (
    <div className="contacto">
      <h2>Contacta con Nosotros</h2>
      <p>¡Estamos aquí para ayudarte! Puedes contactarnos a través de los siguientes medios:</p>
      <ul>
        <li>
          <strong className= "redes">Email:</strong>{" "}
          <a href="mailto:Watchit@gmail.com">Watchit@gmail.com</a>
        </li>
        <li>
          <strong className= "redes">Instagram:</strong>{" "}
          <a href="https://www.instagram.com/chenetflix/">@Watch_It_Oficial</a>
        </li>
        <li>
          <strong className= "redes">Twitter:</strong>{" "}
          <a href="https://x.com/CheNetflix">@Watch_It</a>
        </li>
      </ul>
    </div>
  );
};

export default Contactenos;