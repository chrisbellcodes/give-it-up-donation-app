import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCurrentUser } from '../redux/actions/userActions'

export default function withAuth (ComponentToWrap) {

  class DummyComponent extends React.Component {
    componentDidMount() {
      if (!localStorage.token) {
        this.props.history.push('/')
      } else {
        this.props.setCurrentUser()
      }
    }

    render() {
      return (
        < ComponentToWrap loggedIn={this.props.loggedIn} {...this.props}/>
      )
    }

  }

const mapStateToProps = (state) => {
  return {
    loggedIn: state.currentUser.loggedIn
  }
}

const mapDispatchToProps = {
    setCurrentUser: getCurrentUser
}

return withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(DummyComponent)
  );

}
