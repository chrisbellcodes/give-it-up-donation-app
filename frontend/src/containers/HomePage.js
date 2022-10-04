import React from 'react'
import { getVices } from "../redux/actions/viceActions";
import { addViceToCart } from "../redux/actions/cartActions";
import { connect } from "react-redux";

import '../App.css'
import Login from '../components/Login'



class HomePage extends React.Component {

  componentDidMount() {
    this.props.getVices();
  }
  
  render() {
    return(
      <React.Fragment>
      
      <div className="hero-img" style={{backgroundImage: `url(/da-homepage-img.jpg)`}} >
        <div className="hero-content">
          <h1 className="hero-content__header">
            Give up a vice,
            <br/>
            Change a life.
          </h1>
          <p className="hero-content__sub-header">
            Every month donate the cost of just one your favorite vices to artist education. 
          </p>
          </div>
      </div>

      </React.Fragment>
    )
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
  addViceToCart: addViceToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
