import React, {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./context/MovieContext";

const API_KEY = "9cccdff9";


export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState ("");
  const [query, setQuery] = useState("Avengers");


  useEffect (() => {
    fetchMovies(query);
  }, [query]);

  const fetchMovieDetails = async (imdbID) => {
    const res = await
  fetch (`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=
    short`);
    const data = await res.json();
    return data;
  }

  const fetchMovies = async (title) => {
    setLoading(true);
    setError("");
    try {
      const res = await
  fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`);
      const data = await res.json();

      if (data.Response === "True") {
        const moviesWithDetails = await Promise.all(
          data.Search.map(async(movie) => await
      fetchMovieDetails(movie.imdbID))
        );
        setMovies(moviesWithDetails);
      }else {
        setError (data.Error);
      }
    }catch (err) {
      setError("Failed to fetch movies");
    }
  setLoading(false);
  };


  return(
    <MovieProvider>
      <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">🎬CineQuest</h1>
        <SearchBar setQuery ={setQuery}/>
        {loading && <p className="text-center mt-4">Loading......</p>}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
        <MovieList movies={movies}/>
      </div>
    </MovieProvider>
  );
}

