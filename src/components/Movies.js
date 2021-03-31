import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const moviesList = movies.map(movie => {
    return (
      <div>
        <ul>
          <h2>{movie.title}</h2>
          <p>{movie.time}</p>
          <p>{movie.genres.join(' ,')}</p>
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
};

export default Movies;
