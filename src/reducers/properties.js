const initialState = { items: [] };

const properties = (state = initialState, action) => {
  switch (action.type) {
  case 'REQUEST_DATA_LOADING':
    return Object.assign({}, state, {
      isFetching: true
    });
  case 'REQUEST_DATA_SUCCESS':
    return Object.assign({}, state, {
      items: action.payload,
      isFetching: false
    });
  case 'REQUEST_DATA_FAILURE':
    return Object.assign({}, state, {
      error: action.error,
      isFailure: true
    });
  default:
    return state;
  }  
};
export default properties;