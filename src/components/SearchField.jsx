import React, { useContext } from 'react';
import { Context, Consumer } from '../context';
import './css/Navbar.css';

const SearchField = () => {
  const context = useContext(Context);
  const { updateValue } = context;

  const searchHandler = (event) => {
    updateValue('searchTerm', event.target.value);
  };
  return (
    <Consumer>
      {(value) => {
        const { state } = value;
        const { movies } = state;

        if (movies === undefined || movies.length === 0) {
          return <div></div>;
        }

        return (
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Enter movie title'
              onChange={searchHandler}
            />
          </div>
        );
      }}
    </Consumer>
  );
};

export default SearchField;
