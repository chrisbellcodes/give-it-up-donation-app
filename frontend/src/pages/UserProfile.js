import '../App.css';
import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../hoc/withAuth'
import { withRouter } from 'react-router-dom'
import { getCurrentUser } from '../redux/actions/userActions'

import ViceList from '../components/ViceList'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class UserProfile extends React.Component {

  render () {
    return (
      <Container className="pt-5 pb-5">
          <h2>Your Profile</h2>
      
              <div id="userNameBox">
                  {/* <h2 className="pt-2">{this.props.user.first_name} {this.props.user.last_name}</h2> */}
                  <h2 className="pt-2">First Last</h2>
                  <h3>{this.props.user.email} name@example.com</h3>
              </div>

              <div className="pt-5 pb-3">
                <h2>Subscriptions: {this.props.user.Subscriptions}</h2>
                <span>ACTIVE</span>
                <Button className="mx-4" variant="info" >Pause</Button>
                <Button variant="dark" >Cancel</Button>
              </div>

          <h3 >Vices You've given up:</h3>
          <ViceList />
      </Container>
    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
    setCurrentUser: getCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserProfile))
// Will need to add withAuth back in