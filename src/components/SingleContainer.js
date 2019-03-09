/* eslint-disable react/prop-types */
import React from 'react';
import Single from './Single';
import { connect } from 'react-redux';

const SingleContainer = ({match, items}) => {
  const itemIndex = items.findIndex( item =>  item.listingId === match.params.id);
  return (
    <Single id={match.params.id} item={items[itemIndex]}/>
  );
};

const mapStateToProps = state => ({
  items: state.properties.items
});

export default connect(
  mapStateToProps,
  null
)(SingleContainer);