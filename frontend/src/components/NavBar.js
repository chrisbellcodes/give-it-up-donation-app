import React from 'react'
import { Link } from 'react-router-dom'
import withAuth from '../hoc/withAuth'
import { connect } from 'react-redux'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = (props) => {

  return(
    <Navbar className="nav-bar">
      <Navbar.Brand>Give it Up</Navbar.Brand>
        <Nav>
          {props.loggedIn ?
            <Nav.Item>
              <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
            </Nav.Item> : null}

          <Nav.Item>
            <Nav.Link as={Link} to='/vices'>Vices</Nav.Link>
          </Nav.Item>

          {!props.loggedIn ? null :
            <Nav.Item>
              <Nav.Link as={Link} to='/cart'>Cart {props.cart.length > 0 ? `(${props.cart.length})` : null}</Nav.Link>
            </Nav.Item>}

          {props.loggedIn ? null :
            <Nav.Item >
              <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
            </Nav.Item>}

          {props.loggedIn ? null :
            <Nav.Item>
              <Nav.Link as={Link} to='/'>Login</Nav.Link>
            </Nav.Item>}
        </Nav>
    </Navbar>

  )
}
const mapStateToProps = state => {
  return { cart: state.currentUser.cart }
}

export default withAuth(connect(mapStateToProps)(NavBar))
