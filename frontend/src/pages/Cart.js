import React from "react";
import { connect } from "react-redux";
import { totalCart } from "../redux/actions/cartActions";
import { removeViceFromCart } from "../redux/actions/cartActions";

import CartList from "../components/CartList";
import Container from "react-bootstrap/Container";

import CheckOutPage from "./CheckOutPage";


class Cart extends React.Component {
  calculateCartTotal = cartItems => {
    if (this.props.cart.length >= 0) {
      const total = cartItems.reduce((accum, item) => accum + item.amount, 0);
      this.props.totalCart(total);
    }
  };

  render() {
    this.calculateCartTotal(this.props.cart);
    return (
      <React.Fragment>
      <Container className="Cart pt-5 pb-3">
        <h1 className="page-header page-header--cart">Your Cart of Vices</h1>
        <CartList
          cart={this.props.cart}
          removeVice={this.props.removeViceFromCart}
        />
        <h5 className="cart-total">
          <span>Total Donation:</span> ${this.props.cartTotal ? this.props.cartTotal : 0} /month
        </h5>
        <div className="checkout-btn-container">
          <CheckOutPage />
        </div>

      </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.currentUser.cart,
    cartTotal: state.currentUser.cartTotal
  };
};

const mapDispatchToProps = {
  totalCart: totalCart,
  removeViceFromCart: removeViceFromCart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart);

  