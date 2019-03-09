import './Single.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Single = ({ item, image }) => { 
  const priceLabel = `Price: $ ${item.listPrice}`;
  const fullAddressLabel = `Full Address: ${item.streetNumber} ${item.streetName} ${item.city} ${item.postcode}`;
  const descriptionLabel = `Description: ${item.description}`;
  
  return(
    <div role="region" className="single">
      <div className="single__container">
        <h1 aria-label={ priceLabel }>{ priceLabel }</h1>      
        <img className="single__image" src={image.medium} alt={image.title} />
        <div className="single__address" aria-label={ fullAddressLabel }>{ fullAddressLabel }</div>
        <p className="single__description" aria-label={ descriptionLabel }>
          { item.description }
        </p>
      </div>
    </div>
  );};
 
Single.propTypes = {
  item: PropTypes.object,
  image: PropTypes.object
};

export default Single;