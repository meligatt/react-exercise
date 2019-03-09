import React from 'react';
import PropTypes from 'prop-types';

const Single = ({ id }) => (
  <div>
    Single view
    <h3>ID: {id}</h3>
  </div>
);
 
Single.propTypes = {
  id: PropTypes.string
};

export default Single;