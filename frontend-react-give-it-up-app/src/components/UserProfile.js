import '../App.css';
import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../hoc/withAuth'
import { withRouter } from 'react-router-dom'
import { getCurrentUser } from '../redux/actions/userActions'

import ViceList from './ViceList'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class UserProfile extends React.Component {

  render () {
    return (
      <React.Fragment>
        <Container className="pt-5 pb-3">
          <h2>Your Profile</h2>
          <hr/>
        </Container>
        <Container>
          <Row>
            <Col >
              <div id="userNameBox">
                <div className="pt-4">
                  <div className="justify-content-center circle"></div>
                  <h2 className="pt-2">{this.props.user.first_name} {this.props.user.last_name}</h2>
                  <h3>{this.props.user.email}</h3>
                </div>
              </div>
            </Col>
            <Col>
              <div className="pt-5 pb-3">
                <h2>Subscriptions: {this.props.user.Subscriptions}</h2>
                <hr/>
                <span>ACTIVE</span>
                <Button className="mx-4" variant="info" >Pause</Button>
                <Button variant="dark" >Cancel</Button>
              </div>
            </Col>
          </Row>
          </Container>
          <Container className="pt-5 pb-3">
          <h3 >Vices You've given up:</h3>
          <hr/>
          <ViceList />
        </Container>
      </React.Fragment>
    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
    // setCurrentUser: getCurrentUser
}

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(withRouter(UserProfile)))
