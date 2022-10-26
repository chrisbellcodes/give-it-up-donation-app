import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import CheckoutForm from '../components/CheckoutForm'
import Button from 'react-bootstrap/Button'

import FBSignIn from "../components/FBSignIn";
import { connect } from "react-redux";



const CheckOutPage = (props) => {

  // Modal Show Logic
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  /*
  Conidtional render login and checkout:

    - pull in loggedIn from props
    - use a useEffect 
      - watch LoggedIn from redux
    - if loggedIn show payment info
    - if !loggedIn show signup /login
  */
    // Sign In / Payment show logic
    


    return (
    <React.Fragment>

    <Button className='check-out-btn' variant="dark" onClick={handleShowModal}>
     Check Out
   </Button>

   <Modal
    className='checkout-modal'
      {...props}
      show={showModal}
      onHide={handleCloseModal}
      centered
    >
     <Modal.Header className='check-out__header' closeButton>
       <Modal.Title className='check-out__header-text'>Check Out</Modal.Title>
     </Modal.Header>
     <Modal.Body className='check-out__body'>
        {!props.currentUser.loggedIn ? <FBSignIn /> : ""}
        {props.currentUser.loggedIn ?<CheckoutForm /> : ""}
     </Modal.Body>

   </Modal>

    </React.Fragment>
    );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(CheckOutPage)