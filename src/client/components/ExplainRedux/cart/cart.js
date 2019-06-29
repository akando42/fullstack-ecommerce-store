import React, { Component } from 'react';

class Cart extends Component {
  componentDidMount() {
    const { onGetProducts } = this.props;
    onGetProducts();
  }

  render() {
    const { products } = this.props;
    return <div>{products}</div>;
  }
}

export default Cart;
