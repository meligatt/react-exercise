/* eslint-disable react/prop-types */
import './SearchBar.scss';
import React from 'react';

const SearchBar = ({
  onInputChange, 
  onButtonClick,
  hasWarning
}) => (
  <div role = "search" className = "search-bar">
    <div className = "search-bar__container">
      <label htmlFor = "cityInput">
        City:
      </label>
      <input 
        id = "cityInput"
        className = "search-bar__input-text"
        type = "text"
        onChange = { (e) => { onInputChange(e); } }
        aria-required = "true"
        aria-describedby = "warning_search"/>
      <button 
        onClick = { onButtonClick() }
        aria-label = "search"
        className = "search-bar__button">
          Search
      </button>
      { hasWarning && <div id = "warning_search" role = "alert" className = "search-bar__warning">You must enter a city name</div> }
    </div>
  </div>
);

export default SearchBar;

 