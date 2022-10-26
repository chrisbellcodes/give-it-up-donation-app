import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import SigninPage from "./pages/SigninPage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import UserProfile from "./pages/UserProfile";
import ViceContainer from "./pages/ViceContainer";
import { connect } from "react-redux";
import { getVices } from "./redux/actions/viceActions";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_Z9iIEsJMJPXWMNnI2ntNh2cc00IsMY5one");

class App extends React.Component {

  componentDidMount() {
    this.props.getVices();
  }

  render() {
    return (
      <Elements stripe={stripePromise}>
        <React.Fragment>
          <NavBar />

          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/vices" element={<ViceContainer />} />
          </Routes>

        </React.Fragment>
      </Elements>
    );
  }
}
const mapStateToProps = state => {
  return {
    vices: state.vices,
    user: state.currentUser
  };
};

const mapDispatchToProps = {
  getVices: getVices,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
