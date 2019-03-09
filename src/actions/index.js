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
