import React, { Component } from 'react';

class SearchFilter extends Component {
  componentDidMount() {
    const { onGetFilters, onGetProducts, onGetSorts } = this.props;
    onGetFilters();
    onGetProducts();
    onGetSorts();
  }

  render() {
    const { children, className, products, filters, sorts } = this.props;

    return (
      <div>
        {products.map(product => (
          <div>{product.name}</div>
        ))}
      </div>
    );
  }
}

export default SearchFilter;
