import React from 'react';
import PropTypes from 'prop-types';

const Single = ({ match }) => (
  <div>
    Single view
    <h3>ID: {match.params.id}</h3>
  </div>
);
 
Single.propTypes = {
  match: PropTypes.object
};

export default Single;