import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const API_URL = `https://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDB_API_KEY}`

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    console.log("Searching for:", title);
    console.log("API URL:", API_URL);
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log("API response:", data);
      if (data.Search) {
        setMovies(data.Search);
      } else {
        console.log("No movies found or error in API response");
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
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