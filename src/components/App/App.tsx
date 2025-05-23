import axios from "axios";
// import { useState } from "react";
// import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
// import type { Movie } from "../../types/movie";

function App() {
  const handleSearch = async (newQuery: string) => {
    // console.log("hjhjh", newQuery);

    // const API_KEY = import.meta.env.VITE_TMDB_API_KEY;&api_key=${API_KEY}
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${newQuery}`
    );
    console.log("hhhhh", res);
  };
  return <>{<SearchBar onSearch={handleSearch} />}</>;
}

export default App;
