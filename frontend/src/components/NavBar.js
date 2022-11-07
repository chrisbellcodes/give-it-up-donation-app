import React from 'react'
import { Link } from 'react-router-dom'
// import withAuth from '../hoc/withAuth'
import { connect } from 'react-redux'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = (props) => {

  return(
    <Navbar className="nav-bar">
      <Navbar.Brand>
        <Nav.Link className='giu-logo' as={Link} to='/'>Give it Up</Nav.Link>
      </Navbar.Brand>
        <Nav>
          {/* {props.loggedIn ? */}
            <Nav.Item>
              <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
            </Nav.Item> {/*: null */}

          <Nav.Item>
            <Nav.Link as={Link} to='/vices'>Vices</Nav.Link>
          </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to='/cart'>Cart {props.cart.length > 0 ? `(${props.cart.length})` : null}</Nav.Link>
            </Nav.Item>

          {props.loggedIn ? null :
            <Nav.Item >
              <Nav.Link className='btn btn-primary btn--signin' as={Link} to='/signin'>Sign Up / Login</Nav.Link>
            </Nav.Item>}

        </Nav>
    </Navbar>

  )
}
const mapStateToProps = state => {
  return { cart: state.currentUser.cart }
}

export default connect(mapStateToProps)(NavBar)
