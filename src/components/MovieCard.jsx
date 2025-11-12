import React, {useContext} from "react";
import { MovieContext } from "../context/MovieContext";


export default function MovieCard({ movie }) {
    const { favorites, toggleFavorite } = useContext(MovieContext);
    const isFav = favorites.some((m) => m.imdbID === movie.imdbID);

    return(
        <div className="bg-white shadow-md rounded-lg p-4 flex flex-col
    items-center text-center">
        <img
            src={movie.Poster !== "N/A" ?movie.Poster :
    "https://via.placeholder.com/150"}
        alt={movie.Title}
        className="w-40 h-56 object-cover rounded-md"
        />
        <h2 className="font-semibold mt-3">{movie.Title}</h2>
        <p className="text-sm text-gray-600">{movie.Year}</p>
        <button
        onClick={() => toggleFavorite(movie)}
        className={`mt-3 px-3 py-1 rounded-full text-sm ${
        isFav ? "bg-red-500 text-white" : "bg-gray-200 text-white"
    }`}
    >
        {isFav ? "❤️ Favorited" :  "🤍 Add Favorite"}
        </button>
        </div>
    );
}