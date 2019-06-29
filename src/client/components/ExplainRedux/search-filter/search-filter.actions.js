import { createAction } from 'redux-actions';

// Redux Thunk
export const GET_FILTERS_REQUEST = 'GET_FILTERS_REQUEST';
export const getFiltersRequest = createAction(GET_FILTERS_REQUEST);

export const GET_FILTERS_SUCCESS = 'GET_FILTERS_SUCCESS';
export const getFiltersSuccess = createAction(GET_FILTERS_SUCCESS);

export const GET_FILTERS_FAILURE = 'GET_FILTERS_FAILURE';
export const getFiltersFailure = createAction(GET_FILTERS_FAILURE);

export const getFilters = params => (dispatch, getState) =>
  fetch('/getFilters')
    .then(response => dispatch(getFiltersSuccess(response)))
    .catch(err => dispatch(getFiltersFailure(err)));

export const getProducts = params => (dispatch, getState) =>
  fetch('/getProducts').then(
    response =>
      /* Same as getSizes */
      null
  );

export const getSorts = params => (dispatch, getState) =>
  fetch('/getSorts').then(
    response =>
      /* Same as getSizes */
      null
  );
