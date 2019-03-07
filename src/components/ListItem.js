import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({ item }) =>(
  <li style={{border:'1px solid blue'}}>
    <Link to={`/view/${ item.id }`}>
      {item.title}
    </Link>
  </li> 
);

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ListItem;