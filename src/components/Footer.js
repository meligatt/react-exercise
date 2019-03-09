import './Footer.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__author">
          <span>React / Redux / Screen Reader optimized - 2019 by Melissa Gattoni.</span>
        </div>
        <ul  className="footer__link-list">
          <li className="footer__list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="footer__list-item">
            <a href="https://github.com/meligatt/react-exercise" rel='noopener noreferrer' target="_blank">About</a>
          </li>
          <li className="footer__list-item">
            <a href="https://twitter.com/meligatt" rel='noopener noreferrer' target="_blank">Author</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
