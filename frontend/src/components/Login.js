import React from "react"
import { connect } from 'react-redux'
import withAuth from "../hoc/withAuth"
import { withRouter, Redirect } from 'react-router-dom'
import { logIn } from '../redux/actions/userActions'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  componentDidUpdate() {
    if (this.props.user.loggedIn) {
      this.props.history.push('/vices')
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.logIn(this.state.email, this.state.password)
  }

  handleChange = (e) => {
      const {name, value} = e.target
      this.setState({
        [name]: value
      })
  }

  render() {

    return (
      <div className="login-form">
        <h2 className="d-flex justify-content-center pt" >Login</h2>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group as={Col}>
          <Form.Label>Email Address</Form.Label>
            <Form.Control
                type="text"
                name="email"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.handleChange}
                />
        </Form.Group>
        <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="dark" type="submit">Log in </Button>
        </div>
      </Form>
    </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = {
  logIn: logIn,
}

export default withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Login)
)
