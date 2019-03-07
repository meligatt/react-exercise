import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const List = () => (
  <ul style={{border:'1px solid green'}}>
    {
      [{id:1, title:'result 1'}, {id:2, title:'result 2'}].map(
        (item) => <ListItem key={item.id}  item={item}/>
      ) 
    }
  </ul>
);

List.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  )
};

export default List;