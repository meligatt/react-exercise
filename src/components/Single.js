import React from 'react';
import PropTypes from 'prop-types';

const Single = ({ item }) => (
  <div>
    Single view:
    <p>{item.description}</p>
    <p>{item.listPrice}</p>
  </div>
);
 
Single.propTypes = {
  item: PropTypes.object
};

export default Single;