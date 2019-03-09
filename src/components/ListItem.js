import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({ item }) =>(
  <li>
    {item.description}
    <Link to={`/${ item.listingId }`} aria-label="">Review property</Link>
  </li> 
);

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ListItem;