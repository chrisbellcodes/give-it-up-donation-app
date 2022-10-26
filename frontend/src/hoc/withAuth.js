import React from 'react'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { getCurrentUser } from '../redux/actions/userActions'

// export default function withAuth (ComponentToWrap) {

//   class DummyComponent extends React.Component {
//     componentDidMount() {
//       if (!this.props.loggedIn) {
//         this.props.history.push('/')
//       }
//     }

//     render() {
//       return (
//         < ComponentToWrap loggedIn={this.props.loggedIn} {...this.props}/>
//       )
//     }

//   }

// const mapStateToProps = (state) => {
//   return {
//     loggedIn: state.currentUser.loggedIn
//   }
// }

// const mapDispatchToProps = {
//     setCurrentUser: getCurrentUser
// }

// return connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DummyComponent)

// }
