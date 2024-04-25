
 /* if logeado
          <img
            className="icono-persona"
            src={require("../imagenes/iconitos/icono-persona.png")}
            alt="icono-persona"
          />

          <h4>Julieta</h4>
          <BotonPerfil id='botonperfilestilo'/>*/


          import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Inicio from "./componentes/Inicio";
import Login from "./componentes/Login";
import Pelicula from "./componentes/Pelicula";

import "./css/header.css";
import "./css/footer.css";
import "./css/inicio.css";
import "./css/carrusel.css";
import "./css/pelicula.css";
import "../src/css/Login.css";

function App() {
  return (
    
    <Router>
      <div>
        <Header />
        {/* Aquí debes añadir esta línea para renderizar el componente Header */}
        <Routes>
         <Route path="/Login" element={<Login />} />,
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/preferidas" element={<Pelicula />} />
          {/* Añade aquí más rutas si las tienes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
