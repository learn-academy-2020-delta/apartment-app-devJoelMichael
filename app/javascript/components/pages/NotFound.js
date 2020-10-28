import React, { Component } from 'react'
import snore from '../assets/fourOhFour.jpg'

class NotFound extends Component {
  render() {
    return(
      <>
      <div id="nf-title">
        <h1 style={{
          paddingTop: '25vh',
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          fontSize: '100px',
          color: 'white',
          textShadow: '2px 2px 1.5px lightgrey',
          backgroundColor: 'black',
          margin: '0px'
        }}>
         404 <br/> Get out of here! <br/> Will attack if awoken.
        </h1>
      </div>
        <div
        id="nf-body"
        style={{
          backgroundImage: `url(${snore})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        >
        </div>
      </>
    )
  }
}
export default NotFound
