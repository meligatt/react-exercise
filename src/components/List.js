import './List.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({items, isFetching}) => {
  return (
    <section className="list">
      { isFetching && <div>Loading results...</div> }
      
      { !isFetching && items.length > 0 && 
        <div role="list">
          {
            items.map( item => <ListItem key={item.listingId} item={item}/>)
          }
        </div>
      }
    </section>
  );};

List.propTypes = {
  items: PropTypes.array,
  isFetching:PropTypes.bool
};

export default List;