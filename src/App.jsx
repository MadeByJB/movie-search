import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Index from './components/Index';
import MovieDetails from './components/MovieDetails';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider>
      <Router>
        <Fragment>
          <Navbar />
          <br />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/movies/details/:id' component={MovieDetails} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
