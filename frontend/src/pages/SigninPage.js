import React, {useEffect} from 'react';
import FirebaseSignIn from '../components/FBSignIn'
import Container from 'react-bootstrap/Container'

import { useNavigate } from "react-router-dom";

// Redux Imports
import { connect } from 'react-redux'

// Change to a functional component
// use login flag -> if true redrict to profile page


const SigninPage = ({currentUser}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser.loggedIn) {
      // navigate('/vices')
    }
  }, [currentUser.loggedIn]);


    return (
      <Container className="signup-main">
        <FirebaseSignIn />
      </Container>
    )

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninPage)
