import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import SigninPage from "./pages/SigninPage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import UserProfile from "./pages/UserProfile";
import ViceContainer from "./pages/ViceContainer";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_Z9iIEsJMJPXWMNnI2ntNh2cc00IsMY5one");

class App extends React.Component {
  render() {
    return (
      <Elements stripe={stripePromise}>
        <React.Fragment>
          <NavBar />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/cart" component={Cart} />
            <Route path="/signup" component={SigninPage} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/vices" component={ViceContainer} />
          </Switch>
        </React.Fragment>
      </Elements>
    );
  }
}

export default App;
