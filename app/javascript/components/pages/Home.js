import React, { Component } from 'react'
import map from '../assets/heonnMap.jpg'
import Helmet from 'react-helmet'
class Home extends Component {
  render() {
    return(
      <>
        <div
        id="home-body"
        style={{
          backgroundImage: `url(${map})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        >
          <p> Find a new home </p>
        </div>
      </>
    )
  }
}
export default Home
