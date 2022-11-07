import React, { useState } from 'react';
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { connect } from "react-redux";


const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    console.log('yas')
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:3001/profile",
      },
    });


    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      setError(result.error.message)
      console.log(result.error.message);
    } else {
      console.log(result)
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <>
      <p className='CheckoutForm__error-message'>{error}</p>
      <form className="CheckoutForm" onSubmit={handleSubmit}>
        <PaymentElement />
        <button className="CheckoutForm__btn" disabled={!stripe}>Submit</button>
      </form>
    </>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    cartTotal: state.currentUser.cartTotal
  };
};

export default connect(
    mapStateToProps,
    null
  )(CheckoutForm)
 


