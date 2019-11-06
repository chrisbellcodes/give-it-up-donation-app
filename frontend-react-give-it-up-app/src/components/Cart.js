import React from 'react'
import { connect } from 'react-redux'
import { totalCart } from '../redux/actions/cartActions'
import withAuth from '../hoc/withAuth'
import CartList from './CartList'
import Container from 'react-bootstrap/Container'


class Cart extends React.Component {

  calculateCartTotal = (cartItems) => {
    const total = cartItems.reduce((accum, item) => accum + item.amount, 0)
      if (this.props.cart.length > 0) {
        this.props.totalCart(total)
      }
  }

  render() {
    this.calculateCartTotal(this.props.cart)
    return(
      <Container className="pt-5 pb-3">
        <h1>Your Cart of Vices</h1>
        <CartList cart={this.props.cart}/>
        <h5>Total Donation: ${this.props.cartTotal ? this.props.cartTotal : 0} a month</h5>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.currentUser.cart,
    cartTotal: state.currentUser.cartTotal
  }
}

const mapDispatchToProps = {
  totalCart: totalCart
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(Cart))
