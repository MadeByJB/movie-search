import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Overview from './Overview';
import Spinner from './Spinner';

class MovieDetails extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    const uri = `http://localhost:5000/movies/${id}`;
    axios
      .get(uri)
      .then((res) => {
        this.setState({ movie: res.data });
      })
      .catch((err) => console.log(err));
  }

  getDescription = (details) => {
    const [a] = details;
    const { Description } = a;
    const briefDesc = `${Description.slice(0, 150)}`;
    return briefDesc;
  };

  render() {
    const { movie } = this.state;

    if (movie === undefined || Object.keys(movie).length === 0) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Link to='/' className='btn btn-dark btn-sm mb-4'>
          Go Back
        </Link>
        <Overview currentMovie={movie} />
      </Fragment>
    );
  }
}
export default MovieDetails;
