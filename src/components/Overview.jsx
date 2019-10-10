import React, { Fragment } from 'react';
import './css/Movies.css';

const Overview = (props) => {
  const { currentMovie } = props;
  const { TitleName, ReleaseYear, Storylines, Genres, Participants } = currentMovie;
  const [firstCrew, secondCrew, thirdCrew] = Participants;
  return (
    <Fragment>
      <div className='card'>
        <h3 className='card-header'>
          {TitleName} ({ReleaseYear})
        </h3>
        <div className='card-body'>
          <h5 className='card-title'>Overview:</h5>
          <p className='card-text'>{Storylines[0].Description}</p>

          <h5 className='card-title'> Genres: </h5>
          <div className='row'>
            <ul>
              {Genres.map((genre) => {
                return (
                  <li key={genre} className=''>
                    {genre}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='cast'>
            <h5>Featured Cast:</h5>
            <p>
              {firstCrew.Name} - {firstCrew.RoleType}
            </p>
            <p>
              {secondCrew.Name} - {secondCrew.RoleType}
            </p>
            <p>
              {thirdCrew.Name} - {thirdCrew.RoleType}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Overview;
