import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <Link to={`/movie/${imdbID}`} className="movie-link">
      <div className="movie">
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
        <div className="movie-info">
          <h3>{Title}</h3>
          <p>{Year} | {Type}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;