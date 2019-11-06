import React from 'react'
import '../App.css'
import Login from '../components/Login'
import Container from 'react-bootstrap/Container'

class HomePage extends React.Component {

  render() {
    return(
      <Container>
        <div id="loginForm" >
          <Login />
        </div>
        <h1>Give up a vice, <br/> Change a life.</h1>
      </Container>
    )
  }

}

export default HomePage
