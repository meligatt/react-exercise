import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

function configureStore() {
  const middlewares = [thunk];

  const defaultState = {
    properties: {
      isFetching: false,
      error: null,
      items: []
    },
    singleProperty: {
      isFetching: false,
      error: null,
      item: {}
    }
  };
  const store = createStore(rootReducer, defaultState, applyMiddleware(...middlewares));
  return store;
}
export default configureStore;