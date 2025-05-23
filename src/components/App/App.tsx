import axios from "axios";
import { useState } from "react";
// import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import type { Movie } from "../../types/movie";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";

interface GetMoviesRes {
  results: Movie[];
}

function App() {
  const [movies, getMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (newQuery: string) => {
    const BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER;

    try {
      setIsLoading(true);

      const res = await axios.get<GetMoviesRes>(
        `https://api.themoviedb.org/3/search/movie?query=${newQuery}`,
        {
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
          },
        }
      );
      getMovies(res.data.results);
      //   console.log("Результати:", );
    } catch (error) {
      console.error("Помилка при запиті:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isLoading ? (
        <Loader />
      ) : (
        <MovieGrid
          movies={movies}
          onSelect={(movie) => console.log("Selected movie:", movie)}
        />
      )}
    </>
  );
}

export default App;
