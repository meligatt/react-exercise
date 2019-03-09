import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {
  return(
    <nav className="main-nav">
      <div className="main-nav__container">
        <Link className="main-nav__logo" to="/"> Search Properties </Link>
        <ul className="main-nav__menu">
          <li className="main-nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="main-nav__item">
            <a href="https://github.com/meligatt/react-exercise">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );};

export default MainNav;
