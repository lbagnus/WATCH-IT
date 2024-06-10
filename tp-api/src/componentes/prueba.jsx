
 /* if logeado
          <img
            className="icono-persona"
            src={require("../imagenes/iconitos/icono-persona.png")}
            alt="icono-persona"
          />

          <h4>Julieta</h4>
          <BotonPerfil id='botonperfilestilo'/>*/

          /*<Route path="/MisListas" element={<MisListas />} />*/


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

    // Función para guardar la lista de películas "por ver" en `localStorage`
    const guardarListaPorVer = (nuevaLista) => {
      localStorage.setItem("porVer", JSON.stringify(nuevaLista));
      setPorVer(nuevaLista);
  };

  // Función para guardar `listaPosterPath` en `localStorage`
  const guardarListaPosterPath = (nuevaLista) => {
      localStorage.setItem("listaPosterPath", JSON.stringify(nuevaLista));
      setListaPosterPath(nuevaLista);
  };

  // Función para agregar una película a la lista "por ver" y su `posterPath` a `listaPosterPath`
  const agregarPeliculaPorVer = (pelicula) => {
      // Verifica si la película ya está en la lista "por ver"
      const peliculaExistente = porVer.find(p => p.movieId === pelicula.movieId);

      if (!peliculaExistente) {
          // Agrega la película a la lista "por ver"
          const nuevaListaPorVer = [...porVer, pelicula];
          guardarListaPorVer(nuevaListaPorVer);

          // Agrega el `poster_path` de la película a `listaPosterPath`
          const nuevoPosterPath = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
          const nuevaListaPosterPath = [...listaPosterPath, nuevoPosterPath];
          guardarListaPosterPath(nuevaListaPosterPath);
      }
  };

  // Agrega la película pasada como prop a la lista "por ver" al recibir `objetoPelicula`
  useEffect(() => {
      if (objetoPelicula) {
          agregarPeliculaPorVer(objetoPelicula);
      }
  }, [objetoPelicula]);

  

  if (listaPorVerGuardada) {
      const listaPorVerParseada = JSON.parse(listaPorVerGuardada);
      setPorVer(listaPorVerParseada);
  }

  if (listaPosterPathGuardada) {
      const listaPosterPathParseada = JSON.parse(listaPosterPathGuardada);
      setListaPosterPath(listaPosterPathParseada);
  }

 