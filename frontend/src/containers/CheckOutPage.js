import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import CheckoutForm from '../components/CheckoutForm'
import Button from 'react-bootstrap/Button'



const CheckOutPage = (props) => {

  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <React.Fragment>

    <Button className='check-out-btn' variant="dark" onClick={handleShow}>
     Check Out
   </Button>

   <Modal
    className='checkout-modal'
      {...props}
      show={show}
      onHide={handleClose}
      centered
    >
     <Modal.Header className='check-out__header' closeButton>
       <Modal.Title className='check-out__header-text'>Check Out</Modal.Title>
     </Modal.Header>
     <Modal.Body className='check-out__body'>
        <CheckoutForm />
     </Modal.Body>

   </Modal>

    </React.Fragment>
    );
}



export default CheckOutPage