import './ListItem.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListItem = ({ item }) => {
  const priceLabel = `Price: ${item.listPrice}`;
  const fullAddressLabel = `Full Address: ${item.streetNumber} ${item.streetName} ${item.city} ${item.postcode}`;
  return(
    <div role = "listitem" className = "list-item">
      <div className = "list-item__container">
        <Link to = { `/${ item.listingId }` }>
          <img className = "list-item__image" src = { item.images[0].small } alt = { item.images[0].title } />
        </Link>
        <h4 className = "list-item__title" aria-label = { priceLabel }>
          <span>Price:</span> 
          { priceLabel }
        </h4>
        <div aria-label = { fullAddressLabel }>{ fullAddressLabel }</div>
        <Link className = "list-item__link" to = { `/${ item.listingId }` } aria-label = "learn more about this property">Review property</Link>
      </div> 
    </div> 
  );};

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ListItem;