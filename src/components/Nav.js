import './Nav.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <nav className = "nav">
      <div className = "nav__container">
        <Link className = "nav__logo" to = "/"> Search Properties </Link>
        <ul className = "nav__menu">
          <li className = "nav__item">
            <Link to = "/">Home</Link>
          </li>
          <li className = "nav__item">
            <a href = "https://github.com/meligatt/react-exercise">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );};

export default Nav;
