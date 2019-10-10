import React from 'react';
import { Link } from 'react-router-dom';
import './css/Movies.css';

const MovieCard = (props) => {
  const { id, title, releaseDate, description } = props;
  const getDescription = (details) => {
    const [a] = details;
    const { Description } = a;
    const briefDesc = `${Description.slice(0, 150)}`;
    return briefDesc;
  };
  return (
    <div className='col-md-6'>
      <div className='card mb-4 shadow-sm'>
        <h5 className='card-header text-light bg-dark'>
          {title} ({releaseDate})
        </h5>
        <div className='card-body'>
          {/* <h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6> */}
          <p className='card-text'>{getDescription(description)}...</p>
          <Link to={`movies/details/${id}`} className='btn btn-primary'>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
