import './Single.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Single = ({ item, image }) => { 
  const priceLabel = `Price: ${item.listPrice}`;
  const fullAddressLabel = `Full Address: ${item.streetNumber} ${item.streetName} ${item.city} ${item.postcode}`;
  const descriptionLabel = `Description: ${item.description}`;
  
  return(
    <div role="region" className="single">
      <h1 aria-label={ priceLabel }>{ priceLabel }</h1>      
      <img src={image.medium} alt={image.title} />
      <div aria-label={ fullAddressLabel }>{ fullAddressLabel }</div>
      <p aria-label={ descriptionLabel }>{ descriptionLabel }</p>
    </div>
  );};
 
Single.propTypes = {
  item: PropTypes.object,
  image: PropTypes.object
};

export default Single;