import '../App.css';
import React, { useEffect, useState } from 'react'
import ViceList from '../components/ViceList'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getCurrentUser, signup } from '../redux/actions/userActions'

import { stripePromise } from "../App";
import firebase from 'firebase/compat/app';



const UserProfile = (props)=> {
  const [stripe, setStripe] = useState(null)
  const [message, setMessage] = useState('')
  const [subStatus, setSubStatus] = useState('No subscription yet')

  useEffect(
    ()=>{
      stripePromise.then(stripeData =>setStripe(stripeData))
    },[props.user.loggedIn])
  
  console.log(stripe)


  // Retrieve the "payment_intent_client_secret" query parameter appended to
  // your return_url by Stripe.js
  const clientSecret = new URLSearchParams(window.location.search).get(
    'payment_intent_client_secret'
  );
  if(stripe && clientSecret) {
    stripe.retrievePaymentIntent(clientSecret).then(({paymentIntent}) => {

    // Inspect the PaymentIntent `status` to indicate the status of the payment
    // to your customer.
    //
    // Some payment methods will [immediately succeed or fail][0] upon
    // confirmation, while others will first enter a `processing` state.
    //
    // [0]: https://stripe.com/docs/payments/payment-methods#payment-notification
    switch (paymentIntent.status) {
      case 'succeeded':
        setMessage('Success! Payment received.');
        setSubStatus('Active')
        break;

      case 'processing':
        setMessage("Payment processing. We'll update you when payment is received.");
        setSubStatus('Pending')
        break;

      case 'requires_payment_method':
        setMessage('Payment failed. Please try another payment method.');
        setSubStatus('Active')
        // Redirect your user back to your payment page to attempt collecting
        // payment again
        break;

      default:
        setMessage('Something went wrong.');
        break;
    }
    });
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        props.getCurrentUser(user)
      }
    });
  },[])

  function cancelSubscription() {
    return fetch('/cancel-subscription', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stripe_subscription_id: props.subscription.subscriptionId,
      }),
    })
    .then(response => {
      return response.json();
    })
    .then(cancelSubscriptionResponse => {
      setSubStatus('Canceled')
      console.log(cancelSubscriptionResponse)
    });
  }

  const {email, first_name, last_name, subscriptions} = props.user

  return (
    <Container className="Profile pt-5 pb-5">
      <h1 className='page-header page-header--profile'>Your Profile</h1>
      {message && (<div className="profile__section profile__section--sub-actions">
        <div className='profile__stripe-payment-status-message'>
          {message}
        </div>
      </div>)}
    
      <div className="profile__section profile__section--user-info">
          <h2 className='section-header section-header--profile'>Your Info:</h2>
          <p className="profile__section-text profile__username">{first_name} {last_name}</p>
          <p className='profile__section-text profile__useremail'>{email}</p>
      </div>

      <div className="profile__section profile__section--sub-actions">
        <h2 className='section-header section-header--profile'>Subscriptions: {subscriptions}</h2>
        <div className='profile__status-container'>
          <span className='profile__section-text profile__sub-status-text'>{subStatus}</span>
          <a className='profile__sub-cancel-btn btn btn-primary' href="https://billing.stripe.com/p/login/test_7sIfZnbAZ6A8cRWaEE" >Cancel</a>
        </div>
      </div>

      {/* <div className="profile__section profile__section--sub-details">
        <h2 className='section-header section-header--profile'>Vices You've given up:</h2>
        <ViceList />
      </div> */}
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    subscription: state.subscription
  }
}

const mapDispatchToProps = {
    getCurrentUser: getCurrentUser,
    signup: signup
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
// Will need to add withAuth back in