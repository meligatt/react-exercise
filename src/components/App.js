import React, { Component } from 'react';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import List from './List';
import Single from './Single';

class App extends Component {
  componentDidMount(){
    const data = axios({
      url: 'http://localhost:3000/results',
      method: 'GET'
    }).then(function (response) {
      console.log('response', response);
    });
  }
  render(){
    return(
      <div>
        <Router>
          <div className="app-container" style={{border:'1px solid pink'}}>
            <Link to="/">Search App</Link>
            <Route exact path="/" component = { List } />
            <Route path="/view/:id" component = { Single } />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;