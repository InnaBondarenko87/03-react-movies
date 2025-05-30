// import { useState } from "react";
import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  async function handleSubmit(formData: FormData) {
    const query = formData.get("query")?.toString().trim();

    if (!query) {
      toast.error("Please enter your search query.");
      return;
    }

    onSearch(query);
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        {/* тут уже НЕ onSubmit, а action */}
        <form className={styles.form} action={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
