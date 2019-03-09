/* eslint-disable react/prop-types */
import React from 'react';

const SearchBar = ({
  onInputChange, 
  onButtonClick,
  hasWarning
}) => (
  <div role="search">
    <label htmlFor="cityInput">City:</label>
    <input id="cityInput" type="text" onChange={(e) => { onInputChange(e); } } aria-required="true" aria-describedby="warning_search"/>
    <button onClick={ onButtonClick() } aria-label="search">Search</button>
    { hasWarning && <div id="warning_search" role="alert">You must enter a city name</div> }
  </div>
);

export default SearchBar;

 