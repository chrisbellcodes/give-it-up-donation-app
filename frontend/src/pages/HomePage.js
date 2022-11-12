import React from 'react'
import { addViceToCart } from "../redux/actions/cartActions";
import { connect } from "react-redux";
import Vice from '../components/Vice';
import '../App.css'
// import Login from '../components/Login'
import { Link } from 'react-router-dom';



class HomePage extends React.Component {
  handleClick = vice => {
    this.props.addViceToCart(vice);
  };

  renderPopularVices = () => {

    const popularVices = this.props.vices.filter(vice => vice.popular)
    
    return popularVices.map(vice => (
      <Vice key={vice.id} handleClick={this.handleClick} {...vice} />
    ));
  };
  
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
              Every month donate the cost of just one of your favorite vices to artist education. 
            </p>
            <Link className="btn btn-primary btn--hero-cta" to='/vices'>Give up a Vice Now</Link>
            </div>
            
        </div>
        
        <div className='hs-block hs-block--about'>
          <svg className='hs-triangle about-triangle' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#32cef6" fill-opacity="1" d="M0,64L1440,288L1440,320L0,320Z"></path>
          </svg>
          <h2 className='section-header'>Give WHAT Up?!</h2>
          <div className='hs-block__content'>
            <p className='hs-block__text'>
              Give It Up is a new way to donate. This monthly subscription incentivizes you to abandon that vice (ok - just one a month) you’ve 
              long been meaning to get rid of while simultaneously putting the cost towards arts education!
            </p>
          </div>
          <svg className='hs-triangle about-triangle--bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#32cef6" fill-opacity="1" d="M0,64L1440,288L1440,320L0,320Z"></path>
          </svg>
        </div>

        <div className='hs-block hs-block--popular'>
          <h2 className='section-header'>Popular Vices</h2>
          <div className='hs-block__content'>
            <div className='popular-vices-container'>
              {this.renderPopularVices()}
            </div>
            <div className='hs-button-container'>
            <Link to="/vices">See More Vices</Link>
            </div>
          </div>
        </div>

        <div className='hs-block hs-block--mission'>
          <svg className='hs-triangle hs-triangle--top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ceff5b" fill-opacity="1" d="M0,0L720,256L1440,160L1440,320L720,320L0,320Z"></path>
          </svg>
          <h2 className='section-header'>About Developing Artists</h2>
          <div className='hs-block__content'>
              <p className='hs-block__text'>
                Developing Artists is an incredible team of young artists and activists learning to fight 
                for positive social change via the practical application of performing arts! We need funds 
                for space/time/staff/and everything it takes to hone our skills and share our craft. Support 
                us by supporting yourself. While you give up that monthly pack of cigarettes, or that too too 
                frequent Micky D’s breakfast, we will be growing bigger, louder, and bolder as a powerful team 
                and a force to be reckoned with. Thank you for joining our team, your encouragement is like a 
                megaphone for our voices!
              </p>
          </div>

          <svg className='hs-triangle hs-triangle--bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ceff5b" fill-opacity="1" d="M0,256L1440,64L1440,320L0,320Z"></path>
          </svg>
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
  addViceToCart: addViceToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
