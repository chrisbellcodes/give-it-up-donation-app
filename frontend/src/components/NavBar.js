import React from 'react'
import { Link } from 'react-router-dom'
// import withAuth from '../hoc/withAuth'
import { connect } from 'react-redux'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { userInfo } from 'os'

const NavBar = ({cart, currentUser}) => {

  return(
    <Navbar collapseOnSelect className="nav-bar" expand="lg">
      <Navbar.Brand>
        <Nav.Link className='giu-logo' as={Link} to='/'>Give it Up</Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {currentUser.loggedIn ?
              <Nav.Item>
                <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
              </Nav.Item> : null}

            <Nav.Item>
              <Nav.Link as={Link} to='/vices'>Vices</Nav.Link>
            </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to='/cart'>Cart {cart.length > 0 ? `(${cart.length})` : null}</Nav.Link>
              </Nav.Item>

            {currentUser.loggedIn ? null :
              <Nav.Item >
                <Nav.Link className='btn btn-primary btn--signin' as={Link} to='/signin'>Sign Up / Login</Nav.Link>
              </Nav.Item>
              }
          </Nav>
        </Navbar.Collapse>
    </Navbar>

  )
}
const mapStateToProps = state => {
  return { 
    cart: state.currentUser.cart,
    currentUser: state.currentUser 
  }
}

export default connect(mapStateToProps)(NavBar)
