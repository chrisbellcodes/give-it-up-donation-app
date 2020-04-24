import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { connect } from "react-redux";
import withAuth from "../hoc/withAuth";

import CardSection from './CardSection';

const CheckoutForm = ({ currentUser }) => {
  const stripe = useStripe();
  const elements = useElements();

  function stripePaymentMethodHandler(result, user_id, cart) {
    const planIds = cart.map(plan => {
      return plan.stripe_plan_id
    });
    
    if (result.error) {
      // Show error in payment form
    } else {
      // Otherwise send paymentMethod.id to your server
      fetch('http://localhost:3000/subscriptions', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user_id,
          plans: planIds,
          payment_method: result.paymentMethod.id
        }),
      }).then(function (result) {
        return result.json();
      }).then(function (customer) {
        // The customer has been created
        
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: currentUser.email,
      },
    });

    console.log(result);
    
    stripePaymentMethodHandler(result, currentUser.id, currentUser.cart);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button type="submit" disabled={!stripe}>
        Subscribe
      </button>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    cartTotal: state.currentUser.cartTotal
  };
};

export default withAuth(
  connect(
    mapStateToProps,
    null
  )(CheckoutForm)
)

