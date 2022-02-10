import React from "react";
import { connect } from "react-redux";
import { totalCart } from "../redux/actions/cartActions";
import { removeViceFromCart } from "../redux/actions/cartActions";
import withAuth from "../hoc/withAuth";
import CartList from "../components/CartList";
import Container from "react-bootstrap/Container";
import CheckoutForm from "../components/CheckoutForm";


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
      <Container className="pt-5 pb-3">
        <h1 className="cart-header">Your Cart of Vices</h1>
        <CartList
          cart={this.props.cart}
          removeVice={this.props.removeViceFromCart}
        />
        <h5 className="cart-total">
          <span>Total Donation:</span> ${this.props.cartTotal ? this.props.cartTotal : 0} /month
        </h5>
      </Container>
        <Container className="checkoutForm">
        <CheckoutForm />
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

export default withAuth(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
