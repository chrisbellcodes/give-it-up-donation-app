import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import SigninPage from "./containers/SigninPage";
import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";
import Cart from "./containers/Cart";
import UserProfile from "./components/UserProfile";
import ViceContainer from "./containers/ViceContainer";

class App extends React.Component {
  render() {
    return (
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
    );
  }
}

export default App;
