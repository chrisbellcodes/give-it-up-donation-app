import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import CheckoutForm from '../components/CheckoutForm'
import Button from 'react-bootstrap/Button'

import FBSignIn from "../components/FBSignIn";

import { connect } from "react-redux";
import { createSubscription } from "../redux/actions/subscriptionActions"

import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../App";



const CheckOutPage = (props) => {

  const { currentUser, subscription, createSubscription } = props
  // For Stripe
  // const [clientSecret, setClientSecret] = useState("");
  const options = {
    clientSecret: subscription.clientSecret,
  };
  
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if(currentUser.stripe_customer_id && currentUser.cart){
      createSubscription(currentUser)
    }
  },[currentUser.loggedIn]);



  // For Modal
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  
    
    return (
    <React.Fragment>

    <Button disabled={currentUser.cart ? false : true} className='check-out-btn' variant="dark" onClick={handleShowModal}>
     Check Out
   </Button>

   <Modal
    className='checkout-modal'
      show={showModal}
      onHide={handleCloseModal}
      centered
    >
     <Modal.Header className='check-out__header' closeButton>
       <Modal.Title className='check-out__header-text'>Check Out</Modal.Title>
     </Modal.Header>
     <Modal.Body className='check-out__body'>
        {!currentUser.loggedIn ? <FBSignIn /> : ""}
        {subscription.clientSecret && (<Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>)}
     </Modal.Body>

   </Modal>

    </React.Fragment>
    );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    subscription: state.subscription
  }
}

const mapDispatchToProps = {
  createSubscription: createSubscription,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage)