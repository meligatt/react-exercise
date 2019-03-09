import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({items, isFetching}) => {
  return (
    <section>
      { isFetching && <div>Loading results...</div> }
      { !isFetching && items.length > 0 && 
        <ul>
          {
            items.map( item => <ListItem key={item.listingId} item={item}/>)
          }
        </ul>
      }
      { !isFetching && items.length === 0 && <div>No results found...</div> }
    </section>
  );};

List.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching:PropTypes.bool
};

export default List;