import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

class Provider extends Component {
  state = {
    movies: [],
    headingContent: 'Current Movies',
    searchTerm: '',
  };
  updateValue = (key, value) => {
    this.setState({ [key]: value });
  };

  componentDidMount() {
    const uri = `http://localhost:5000/movies`;
    axios
      .get(uri)
      .then((res) => {
        this.setState({ movies: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      // Testing something
      <Context.Provider value={{ state: this.state, updateValue: this.updateValue }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Context, Provider, Consumer };
