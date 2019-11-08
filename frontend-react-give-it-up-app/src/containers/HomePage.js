import React from 'react'
import '../App.css'
import Login from '../components/Login'
import Container from 'react-bootstrap/Container'

class HomePage extends React.Component {

  render() {
    return(
      <React.Fragment>
      // <Container>
      <h1>Give up a vice, <br/> Change a life.</h1>
        <div id="loginForm" >
          <Login />
        </div>
      // </Container>
      </React.Fragment>
    )
  }

}

export default HomePage
