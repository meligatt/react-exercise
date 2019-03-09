/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({items, isFetching}) => {
  return (
    <div>
      { isFetching && <div>is Fetching...</div> }
    
      { !isFetching && items.length > 0 && 
      <ul>
        { items.map(
          (item) => <ListItem key={item.listingId}  item={item}/>
        )
        }
      </ul>
      }
    
      { !isFetching && items.length === 0 && <div>No results found...</div> }
    </div>
  );};

List.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  )
};

export default List;