import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
import './css/pelicula.css';


function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Aquí debes añadir esta línea para renderizar el componente Header */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/preferidas" element={<Pelicula/>} />
          {/* Añade aquí más rutas si las tienes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


