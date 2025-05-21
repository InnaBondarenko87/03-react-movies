import axios from "axios";
// import { useState } from "react";
// import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  const handleSearch = (newQuery: string) => {
    // const res = await axios.get();
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
    </>
  );
}

export default App;
