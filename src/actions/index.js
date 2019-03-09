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

export function fetchSingleProperty(id){
  console.log('fetchSingleProperty');
  
}