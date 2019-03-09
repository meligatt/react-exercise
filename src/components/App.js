import './App.scss';
import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import ListContainer from './ListContainer';
import SingleContainer from './SingleContainer';

class App extends Component {
  render(){
    return(
      <Router>
        <div className="app-view__container">
          <Nav />
          <main role="main">
            <Route exact path="/" component={ ListContainer } />
            <Route path="/:id" component={ SingleContainer } />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;

