const sortItems = (items, isASC) => {
  if (isASC) {
  // asc
    return items.sort((itemA, itemB) => itemA.listPrice - itemB.listPrice); 
  }  
  // desc
  return items.sort((itemA, itemB) => itemB.listPrice - itemA.listPrice); 
};
    
// reducers: properties
const properties = (state = {}, action) => {
  switch (action.type) {
  case 'REQUEST_DATA_LOADING':{
    return Object.assign({}, state, {
      isFetching: true
    });
  }
  case 'REQUEST_DATA_SUCCESS':{
    return Object.assign({}, state, {
      items: action.payload,
      isFetching: false
    });
  }
  case 'REQUEST_DATA_FAILURE':{
    return Object.assign({}, state, {
      error: action.error,
    });
  }
  case 'TOGGLE_DATA':{
    const isASC = !state.isASC;
    const itemsCopy = state.items.slice();
    const sortedItems = sortItems(itemsCopy, isASC);
    return Object.assign({}, state, {
      items: sortedItems,
      isASC: isASC
    });
  }
  default:{
    return state;
  }
  }
};
export default properties;