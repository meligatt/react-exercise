import React from 'react';
import PropTypes from 'prop-types';

const Single = ({ item }) => (
  <div>
    Single view
    <h3>{item.description}</h3>
    <h3>{item.listPrice}</h3>
  </div>
);
 
Single.propTypes = {
  item: PropTypes.object
};

export default Single;