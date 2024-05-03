import React, { useState, useEffect } from "react";
import GridImages from "./GridImages";
import { useLocation } from "react-router-dom";

const PeliculasVistas = () => {
    const location = useLocation();
    const objetoPeliculaVista = location.state?.objeto;

    // Estados para almacenar la lista de películas vistas y `posterPath`
    const [vistas, setVistas] = useState([]);
    const [listaPosterPathV, setListaPosterPathV] = useState([]);

    // Carga inicial de las listas desde `localStorage`
    useEffect(() => {
        const cargarDatos = () => {
            const listaVistasGuardada = localStorage.getItem("Vistas");
            const listaPosterPathGuardadaV = localStorage.getItem("listaPosterPathV");

            if (listaVistasGuardada) {
                const listaVistasParseada = JSON.parse(listaVistasGuardada);
                setVistas(listaVistasParseada);
            }

            if (listaPosterPathGuardadaV) {
                const listaPosterPathParseadaV = JSON.parse(listaPosterPathGuardadaV);
                setListaPosterPathV(listaPosterPathParseadaV);
            }
        };
        cargarDatos();
    }, []);

    // Función para guardar la lista de películas vistas en `localStorage`
    const guardarListaVistas = (nuevaLista) => {
        localStorage.setItem("Vistas", JSON.stringify(nuevaLista));
        setVistas(nuevaLista);
    };

    // Función para guardar `listaPosterPathV` en `localStorage`
    const guardarListaPosterPathV = (nuevaLista) => {
        localStorage.setItem("listaPosterPathV", JSON.stringify(nuevaLista));
        setListaPosterPathV(nuevaLista);
    };

    // Función para agregar una película a la lista de películas vistas y su `posterPath` a `listaPosterPath`
    const agregarPeliculaVistas = (pelicula) => {
        // Verifica si la película ya está en la lista de películas vistas
        const peliculaExistente = vistas.find(p => p.movieId === pelicula.movieId);

        if (!peliculaExistente) {
            // Agrega la película a la lista de películas vistas
            const nuevaListaVistas = [...vistas, pelicula];
            guardarListaVistas(nuevaListaVistas);

            // Agrega el `poster_path` de la película a `listaPosterPathV`
            const nuevoPosterPath = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
            const nuevaListaPosterPathV = [...listaPosterPathV, nuevoPosterPath];
            guardarListaPosterPathV(nuevaListaPosterPathV);
        }
    };

    // Agrega la película pasada como prop a la lista de películas vistas al recibir `objetoPeliculaVista`
    useEffect(() => {
        if (objetoPeliculaVista) {
            agregarPeliculaVistas(objetoPeliculaVista);
        }
    }, [objetoPeliculaVista]);

    return (
        <div>
            <GridImages imagenes={listaPosterPathV} peliObjeto={vistas} />
        </div>
    );
};

export default PeliculasVistas;
