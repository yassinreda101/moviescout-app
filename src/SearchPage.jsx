import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=fccfb622'

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(searchTerm);
  };

  return (
    <div className="search-page">
      <form className="search-container" onSubmit={handleSearch}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <button type="submit">Search</button>
      </form>

      <div className="movie-container">
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;