import React from 'react'
import '../App.css'
import Login from '../components/Login'



class HomePage extends React.Component {

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
          <Login />
          </div>
      </div>

      </React.Fragment>
    )
  }

}

export default HomePage
