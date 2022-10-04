import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

import CardSection from './CardSection';

const CheckoutForm = ({ currentUser, history }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState();
  const [isError, setIsError] = useState(false);

  function stripePaymentMethodHandler(result, cart) {
    // Grabbing my stripe item ids
    const planIds = cart.map(plan => {
      return plan.stripe_plan_id
    });
    
    if (result.error) {
      // Show error in payment form
      setErrorMessage(result.error);
      setIsError(true);

    } else {
      // Otherwise send paymentMethod.id to server
      fetch('/subscriptions', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: currentUser.email,
          plans: planIds,
          payment_method: result.paymentMethod.id
        }),
      }).then(function (result) {
        return result.json();
      }).then(function (data) {
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
    
    stripePaymentMethodHandler(result, currentUser.cart);
     history.push('/profile')
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div >{isError ? null : errorMessage}</div>
      <CardSection />
      <div className='btn-container'>
        <button className='giu-btn btn btn-info' type="submit" disabled={!stripe}>
          Subscribe
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    cartTotal: state.currentUser.cartTotal
  };
};

export default withRouter(
    connect(
    mapStateToProps,
    null
  )(CheckoutForm)
  )


