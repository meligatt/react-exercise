import './List.scss';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({items, isFetching}) => {
  return (
    <section className="list">
      { isFetching && <div className="list__loading-message">Loading results...</div> }
      
      { !isFetching && items.length > 0 && 
        <Fragment>
          <div className="list__title">
            Results:
          </div>
          <div role="list" className="list__results">
            {
              items.map( item => <ListItem key={item.listingId} item={item}/>)
            }
          </div>
        </Fragment>
      }
    </section>
  );};

List.propTypes = {
  items: PropTypes.array,
  isFetching:PropTypes.bool
};

export default List;