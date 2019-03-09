/* eslint-disable react/prop-types */
import React from 'react';
import Single from './Single';

const SingleContainer = ({match}) => {
  return (
    <Single id={match.params.id}/>
  );
};

export default SingleContainer;