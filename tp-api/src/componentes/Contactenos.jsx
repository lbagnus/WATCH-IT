import React from "react";

const Contactenos = () => {
  return (
    <div className="contacto">
      <h2>Contacta con Nosotros</h2>
      <p>¡Estamos aquí para ayudarte! Puedes contactarnos a través de los siguientes medios:</p>
      <ul>
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:Watchit@gmail.com">Watchit@gmail.com</a>
        </li>
        <li>
          <strong>Instagram:</strong>{" "}
          <a href="https://www.instagram.com/larabagnus/">@larabagnus</a>
        </li>
        <li>
          <strong>Twitter:</strong>{" "}
          <a href="https://twitter.com/UMusicMexico">@UMusicMexico</a>
        </li>
      </ul>
    </div>
  );
};

export default Contactenos;