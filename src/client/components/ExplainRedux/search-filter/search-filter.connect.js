import { connect } from 'react-redux';

import SearchFilter from './search-filter';
import { getFilters, getProducts, getSorts } from './search-filter.actions';

/*
  state = {
    searchFilterReducer: {
      products: {},
      filters: {},
      sorts: {}
    }
  }
 */
const mapStateToProps = state => ({
  products: state.searchFilterReducer.products,
  filters: state.searchFilterReducer.filters,
  sorts: state.searchFilterReducer.sorts
});

const mapDispatchToProps = dispatch => ({
  onGetFilters: () => dispatch(getFilters()),
  onGetProducts: () => dispatch(getProducts()),
  onGetSorts: () => dispatch(getSorts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilter);
