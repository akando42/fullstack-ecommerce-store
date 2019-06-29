import { handleActions } from 'redux-actions';

import { getFiltersSuccess } from './search-filter.actions';

const initialState = {
  products: {},
  filters: {},
  sorts: {}
};

export default handleActions(
  {
    [getFiltersSuccess]: (state, { payload: { response } }) => ({
      ...state,
      filters: response.data
    })
  },
  initialState
);
