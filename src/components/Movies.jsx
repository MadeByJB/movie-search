import React, { Fragment } from 'react';
import { Consumer } from '../context';
import './css/Movies.css';
import MovieCard from './MovieCard';
import Spinner from './Spinner';

const Movies = () => {
  return (
    <Consumer>
      {(value) => {
        const { state } = value;
        const { movies, heading, searchTerm } = state;
        const filteredMovies = movies.filter((movieObj) => {
          const { TitleName } = movieObj;
          return TitleName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        });

        if (movies === undefined || movies.length === 0) {
          return <Spinner />;
        }

        return (
          <Fragment>
            <h3 className='text-center mb-4'>{heading}</h3>
            <div className='row'>
              {filteredMovies.map((movie) => {
                const { _id, TitleName, ReleaseYear, Storylines } = movie;
                return (
                  <MovieCard
                    key={_id}
                    id={_id}
                    title={TitleName}
                    releaseDate={ReleaseYear}
                    description={Storylines}
                  />
                );
              })}
            </div>
          </Fragment>
        );
      }}
    </Consumer>
  );
};

export default Movies;
