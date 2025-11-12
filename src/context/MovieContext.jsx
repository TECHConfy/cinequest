import React, { createContext, useState, useEffect} from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);


    useEffect(() => {
        const stored = localStorage.getItem("favorites");
        if (stored) setFavorites(JSON.parse(stored));
    }, []);

    const toggleFavorite = (movie) => {
        const exists = favorites.find((m) => m.imdbID === movie.imdbID);
        let updated;

        if (exists) {
            updated = favorites.filter((m) => m.imdbID !== movie.imdbID);
        } else{
            updated = [...favorites, movie];
        }

        setFavorites(updated);
            localStorage.setItem("favorites", JSON.stringify(updated));
    };

    return(
        <MovieContext.Provider value={{ favorites, toggleFavorite }}>
         {children}
        </MovieContext.Provider>
    );
};
