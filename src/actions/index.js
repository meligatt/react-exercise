import axios from 'axios';
// const
const TOGGLE_DATA = 'TOGGLE_DATA';

export const toggleData = () => {
  return {
    type: TOGGLE_DATA,
  };
};

// properties
export const requestDataLoading = () => ({
  type: 'REQUEST_DATA_LOADING',
});

export const requestDataSuccess = (data) => {
  return ({
    type: 'REQUEST_DATA_SUCCESS',
    payload: data,
  });};

export const requestDataFailure = (error) => ({
  type: 'REQUEST_DATA_FAILURE',
  payload: error,
});

export function fetchData(query) {
  return (dispatch) => {
    dispatch(requestDataLoading());
    return axios({
      url: 'http://localhost:3000/results',
      params: {
        city: query
      },
      method: 'GET'
    }).then( (response) => {
      dispatch(requestDataSuccess(response.data));
    }).catch((error) => {
      dispatch(requestDataFailure(error)); 
    });
  };
}


// single Property
export const requestSinglePropertyLoading = () => ({
  type: 'REQUEST_SINGLE_PROPERTY_LOADING',
});

export const requestSinglePropertySuccess = (data) => {
  return ({
    type: 'REQUEST_SINGLE_PROPERTY_SUCCESS',
    payload: data,
  });};

export const requestSinglePropertyFailure = (error) => ({
  type: 'REQUEST_SINGLE_PROPERTY_FAILURE',
  payload: error,
});

export function fetchSingleProperty(id) {
  return (dispatch) => {
    dispatch(requestSinglePropertyLoading());
    return axios({
      url: 'http://localhost:3000/results',
      params: {
        listingId: id
      },
      method: 'GET'
    }).then( (response) => {
      dispatch(requestSinglePropertySuccess(response.data[0]));
    }).catch((error) => {
      dispatch(requestSinglePropertyFailure(error)); 
    });
  };
}