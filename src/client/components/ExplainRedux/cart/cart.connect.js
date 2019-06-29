import { connect } from 'react-redux';

import { getProducts } from '../search-filter/search-filter.actions';
import Cart from './cart';

const mapStateToProps = state => ({
  products: state.searchFilterReducer.products
});

const mapDispatchToProps = dispatch => ({
  onGetProducts: () => dispatch(getProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
