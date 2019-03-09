const singleProperty = (state={}, action) => {
  switch (action.type) {
  case 'REQUEST_SINGLE_PROPERTY_LOADING':
    return Object.assign({}, state, {
      isFetching: true
    });
  case 'REQUEST_SINGLE_PROPERTY_SUCCESS':
    return Object.assign({}, state, {
      item: action.payload,
      isFetching: false
    });
  case 'REQUEST_SINGLE_PROPERTY_FAILURE':
    return Object.assign({}, state, {
      error: action.error,
    });
  default:
    return state;
  }  
};
export default singleProperty;