import React, { Component } from 'react';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ListContainer from './ListContainer';
import SingleContainer from './SingleContainer';

class App extends Component {
  
  render(){
    return(
      <div>
        <Router>
          <div>
            <Link to="/">Search Properties </Link>
            <Route exact path="/" component = { ListContainer } />
            <Route  path="/item/:id" component = { SingleContainer } />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;