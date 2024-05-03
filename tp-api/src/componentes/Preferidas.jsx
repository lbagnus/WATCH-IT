import React, { useState, useEffect } from "react";
import GridImages from "./GridImages";
import { useLocation } from "react-router-dom";

const Preferidas = () => {
    const location = useLocation();
    const objetoPelicula = location.state?.objeto;

    // Estados para almacenar la lista de películas "por ver" y `posterPath`
    const [preferidas, setPreferidas] = useState([]);
    const [listaPosterPathP, setListaPosterPathP] = useState([]);

    // Carga inicial de las listas desde `localStorage`
    useEffect(() => {
        const cargarDatos = () => {
            const listaPreferidasGuardada = localStorage.getItem("Preferidas");
            const listaPosterPathGuardadaP = localStorage.getItem("listaPosterPathP");

            if (listaPreferidasGuardada) {
                const listaPreferidasParseada = JSON.parse(listaPreferidasGuardada);
                setPreferidas(listaPreferidasParseada);
            }

            if (listaPosterPathGuardadaP) {
                const listaPosterPathParseadaP = JSON.parse(listaPosterPathGuardadaP);
                setListaPosterPathP(listaPosterPathParseadaP);
            }
        };
        cargarDatos();
    }, []);

    // Función para guardar la lista de películas "por ver" en `localStorage`
    const guardarListaPreferidas = (nuevaLista) => {
        localStorage.setItem("Preferidas", JSON.stringify(nuevaLista));
        setPreferidas(nuevaLista);
    };

    // Función para guardar `listaPosterPath` en `localStorage`
    const guardarListaPosterPathP = (nuevaLista) => {
        localStorage.setItem("listaPosterPathP", JSON.stringify(nuevaLista));
        setListaPosterPathP(nuevaLista);
    };

    // Función para agregar una película a la lista "por ver" y su `posterPath` a `listaPosterPath`
    const agregarPeliculaPreferidas = (pelicula) => {
        // Verifica si la película ya está en la lista "por ver"
        const peliculaExistente = preferidas.find(p => p.movieId === pelicula.movieId);

        if (!peliculaExistente) {
            // Agrega la película a la lista "por ver"
            const nuevaListaPreferida = [...preferidas, pelicula];
            guardarListaPreferidas(nuevaListaPreferida);

            // Agrega el `poster_path` de la película a `listaPosterPath`
            const nuevoPosterPath = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
            const nuevaListaPosterPathP = [...listaPosterPathP, nuevoPosterPath];
            guardarListaPosterPathP(nuevaListaPosterPathP);
        }
    };

    // Agrega la película pasada como prop a la lista "por ver" al recibir `objetoPelicula`
    useEffect(() => {
        if (objetoPelicula) {
            agregarPeliculaPreferidas(objetoPelicula);
        }
    }, [objetoPelicula]);

    return (
        <div>
            <GridImages imagenes={listaPosterPathP} peliObjeto={preferidas} />
        </div>
    );
};

export default Preferidas;
