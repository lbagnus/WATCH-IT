import React, { useState, useEffect } from "react";
import GridImages from "./GridImages";
import { useLocation } from "react-router-dom";

const PorVer = () => {
    const location = useLocation();
    const objetoPelicula = location.state?.objeto;

    // Estados para almacenar la lista de películas "por ver" y `posterPath`
    const [porVer, setPorVer] = useState([]);
    const [listaPosterPath, setListaPosterPath] = useState([]);

    // Carga inicial de las listas desde `localStorage`
    useEffect(() => {
        const cargarDatos = () => {
            const listaPorVerGuardada = localStorage.getItem("porVer");
            const listaPosterPathGuardada = localStorage.getItem("listaPosterPath");

            if (listaPorVerGuardada) {
                const listaPorVerParseada = JSON.parse(listaPorVerGuardada);
                setPorVer(listaPorVerParseada);
            }

            if (listaPosterPathGuardada) {
                const listaPosterPathParseada = JSON.parse(listaPosterPathGuardada);
                setListaPosterPath(listaPosterPathParseada);
            }
        };
        cargarDatos();
    }, []);

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

    return (
        <div>
            <GridImages imagenes={listaPosterPath} peliObjeto={porVer} />
        </div>
    );
};

export default PorVer;

