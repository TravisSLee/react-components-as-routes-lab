import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsList = actors.map(actor => {
    const moviesList = actor.movies.map(movie => <li>{movie}</li>)
    return (
      <div>
        <h2>{actor.name}</h2>
        <ul>
          {moviesList}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
